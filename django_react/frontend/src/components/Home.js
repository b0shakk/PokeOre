import "./HomeStyles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";


function Home() {
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
      setNewAddress(address+data.level)
      console.log(address)
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
      <div className="home">
        <h1>{entry ? entry.user : ""}</h1>
        <Button onClick={() => {
          window.location.href = address
        }}>Continue hunt...</Button>
        <Button href="/logout">Logout</Button>
      </div>
    </>
  );
}

export default Home;