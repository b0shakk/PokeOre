import { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import "./puzzlle.css";
import find from "./travel.png";
import axios from "axios";
import handleClick from "./call";

function Level2() {
    document.body.style.backgroundColor = "#d2e1f0";
    const [name, setName] = useState("");
    const [address, setNewAddress] = useState("/level")

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
            setNewAddress(address+data.level)
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
            <h3>LEVEL 2</h3>
            <div className="tf">
                <h3>It seems our well wisher only talks in riddles, to find the chemical we need desperately for our experiment we need a partner in crime but we dont know how to contact him... find out where he is.</h3>
            </div>
            <div className="tf">
                <img src={find} alt={find} height="300" />
            </div>
            <div className="tf">
                <h2><a href="https://www.instagram.com/p/CnR2G2vP0sl/?igshid=MDJmNzVkMjY=">follow me to find what you seek...</a></h2>
            </div>
            <div className="tf">
                <TextField
                    error={name.length === 0}
                    value={name}
                    label="Where is he?"
                    onChange={(e) => {
                        setName(e.target.value.toLowerCase());
                    }}
                />
            </div>
            <Button variant="contained" onClick={() => handleClick(entry, name, entry.level)} disabled={(name === "") ? true : false}>SUBMIT</Button>
        </>
    );
}

export default Level2