import { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import rails from "./rails.jpg";
import handleClick from "./call";
import "../HomeStyles.css";

function Level8() {
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
            <h3>LEVEL 8</h3>
            <h3>13 Alien species otherwise known as "Rotters" were heard speaking in some language, it was evident they were trying to catch something. Find out what they are trying to catch before them...</h3>
            <div className="bf">
                <img src={rails} alt={rails} height="300" />
            </div>
            <div className="tf">
                <h2>VAGRRVBRJRPUZVEGGNUFN</h2>
                <h2>JANRUIEOFYXABRIENXLBNPGRXLFLRYNXBEVGRVZPHR</h2>
                <h2>NORLGRARFGGURZNFGAZLF</h2>
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

export default Level8