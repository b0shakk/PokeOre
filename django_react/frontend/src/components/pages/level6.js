import { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import cordinates from './cordinates.png';
import handleClick from "./call";

function Level6() {
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
            <h3>LEVEL 6</h3>
            <div className="tf">
                <h3>The sample of the chemical is being auctioned but we don't know much about it... can we make something out of this?</h3>
            </div>
            <div className="tf">
                <img src={cordinates} alt={cordinates} width="fluid" height="100" />
            </div>
            <h2>Op mypluk, pm fvb hyl ylhkpun aopz slaaly paz avv shal mvy tl iba fvb jhu'a npcl bw vu aol xblza. P mvbuk vba aoha aol joltpjhs jhu il bzlk av lewlyptlua vu hupthsz huk thrl aolt puav khunlyvbz tvuzalyz. RlfwozjhslRlf Dolu fvb kv nla fvby ohukz vu aol vyl, fvb ohcl av thrl pa ylhja dpao zvtlaopun, aol mvssvdpun jsblz dpss alss fvb doha aol zbizahujl pz huk P ruvd vusf fvb jhu kljfwoly pa. </h2>
            <div className="bf">
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

export default Level6