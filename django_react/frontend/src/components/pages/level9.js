import { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import pin from "./pin.png";
import handleClick from "./call";

function Level9() {
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
            <h3>LEVEL 9</h3>
            <h3>You have everything you need before going for the ore search, the only thing separating you and the ore location is a password to a mobile phone gathered from a local who found it on the dead body of the previous ore hunter. The local told us for some money that the last words of the hunter were "Path is gonna be long, but the moment you see the glimpse of hope, grab it".</h3>
            <div className="bf">
                <img src={pin} alt={pin} height="300" />
            </div>
            <div className="tf">
                <a href="https://www.youtube.com/watch?v=Xycux0fVrW8">these are some videos recovered from the hunter's camera</a>
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
                <h3>4 Digit Mobile Phone PIN: {name} </h3>
            </div>
            <Button variant="contained" onClick={() => handleClick(entry, name, entry.level)} disabled={(name === "") ? true : false} >SUBMIT</Button>
        </>
    );
}

export default Level9