import { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import "./puzzlle.css";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import img from "./putin.jpg";
import handleClick from "./call";

function Level1() {
    document.body.style.backgroundColor = "#d2e1f0";
    const [text, setText] = useState("Unpuzzle the pieces!!");
    const [name, setName] = useState("");

    const set = () => {
        setText("Congratulations!!");
    };

    const [entry, setNewEntry] = useState(null)
    useEffect(() => {
        getEntry()
    }, [])

    function getEntry() {
        axios({
            method: "GET",
            url: "/api/user/",
        }).then((response) => {
            const data = response.data
            console.log(data)
            setNewEntry(data)
        }).catch((error) => {
            if (error.response) {
                console.log(error.response);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        })
    }

    return (
        <>
            <h3>LEVEL 1</h3>
            <div>
                <h2 className="tag">{text}</h2>
                <JigsawPuzzle
                    imageSrc={img}
                    rows={3}
                    columns={3}
                    onSolved={set}
                    className="jigsaw-puzzle"
                />
            </div>
            <div className="tf">
                <TextField
                    error={name.length === 0}
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value.toLowerCase());
                    }}
                />

            </div>
            <div className="tf"><h3>yet you cannot lift it: {name} </h3></div>
            <Button variant="contained" onClick={() => handleClick(entry, name, entry.level)} disabled={(name === "") ? true : false} >SUBMIT</Button>
        </>
    );
}

export default Level1