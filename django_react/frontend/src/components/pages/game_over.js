import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";

function GameOver() {

    const [entry, setNewEntry] = useState(null)
    const [address, setNewAddress] = useState("/level")
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
            setNewAddress(address + data.level)
            console.log(address)
        }).catch((error) => {
            if (error.response) {
                console.log(error.response);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        })
    }

    function getCookie(name) {
        console.log("cookie fun");
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    console.log(cookieValue);
                    break;
                }
            }
        }
        return cookieValue;
    }


    const handleClick = (e) => {
        var CSRF_TOKEN = getCookie('csrftoken');
        console.log(e.user+"try again");
        axios.post('/try-again/', { 'username': e.user, 'score': "0", 'current_level': "0", 'wrong_attempts': "0" }, {
            headers: {
                'X-CSRFToken': CSRF_TOKEN,
                "Content-Type": 'application/json',
            },
        }
        ).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
        window.location.href = "/level1"
    }

    return (
        <>
            <h1>GAME OVER??</h1>
            <Button onClick={() => handleClick(entry) }> Try Again</Button >
        </>
    );
}

export default GameOver