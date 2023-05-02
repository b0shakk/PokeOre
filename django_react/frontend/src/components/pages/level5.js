import { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import handleClick from "./call";
import "../HomeStyles.css";

function Level5() {
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
            <h3>LEVEL 5</h3>
            <div className="tf">
                <h3>If you wanna go forward look through what you are shown, real answer lie one layer below::</h3>
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
            <div className="tf">
                <h3>Where do we look for the source of our secret chemical? {name} </h3>
            </div>
            <button className="continuebtn" onClick={() => handleClick(entry, name, entry.level)} disabled={(name === "") ? true : false} >submit --&gt;</button>
        </>
    );
}

export default Level5