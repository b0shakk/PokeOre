import { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import wordle from "./wordle.jpeg";
import handleClick from "./call";
import "../HomeStyles.css";

function Level7() {
    document.body.style.backgroundColor = "#d2e1f0";
    const [name, setName] = useState("");

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
            <h3>LEVEL 7</h3>
            <div className="bf">
                <img src={wordle} alt={wordle} height="300" />
            </div>
            <a href="https://mywordle.strivemath.com/?word=xojln">Solve this to know what to look for</a>
            <div className="bf">
                <h3>If you know what I am i can assure you I am the strongest there can be</h3>
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
            <button className="continuebtn" onClick={() => handleClick(entry, name, entry.level)} disabled={(name === "") ? true : false} >submit --&gt;</button>
        </>
    );
}

export default Level7