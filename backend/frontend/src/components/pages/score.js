import "./puzzlle.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Entry from "./entry";

function Score() {
    document.body.style.backgroundColor = "#d2e1f0";
    const [entry, setNewEntry] = useState(null)
    useEffect(() => {
        getEntry()
    }, [])

    function getEntry() {
        axios({
            method: "GET",
            url: "/api/score/",
        }).then((response) => {
            const data = response.data
            console.log(data)
            setNewEntry(data.data)
        }).catch((error) => {
            if (error.response) {
                console.log(error.response);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        })
    }
    console.log(entry)
    if(entry)
        entry.sort((a, b)=> a.score > b.score ? -1 : 1);

    return (
        <>
            <h3>Leaderboard</h3>
            {entry && entry.map(e => <Entry
                key={e.username}
                id={e.username}
                name={e.username}
                score={e.score}
                softskill= { (e.score/100)- (0.25*e.wrong_attempts) + (0.15*e.current_level) }
            />
            )}
        </>
    )
}

export default Score