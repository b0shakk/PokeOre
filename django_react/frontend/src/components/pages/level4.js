import YoutubeEmbed from "./yt";
import "./ytstyle.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import handleClick from "./call";

function Level4() {
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
            <h3>LEVEL 4</h3>
            <div className="App">
                {/* <h1>Youtube Embed</h1> */}
                <YoutubeEmbed embedId="JEKQtTxcr8I" />
            </div>
            <div className="tf">
                <h3>For how many weeks have they drifted? {name} </h3>
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
            <Button variant="contained" onClick={() => handleClick(entry, name, entry.level)} disabled={(name === "") ? true : false} >SUBMIT</Button>
        </>
    );
}

export default Level4