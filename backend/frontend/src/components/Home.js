import "./HomeStyles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import pokeore from "./logo.png";
// import { Button } from "@mui/material";
// import bgimg from "./cowboy_bebop.jpg";


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
        <img src={pokeore} alt={pokeore} height="300"/>
        <h1>Welcome, {entry ? entry.user : ""}</h1>
        <h2>You are an alchemist after the well-sought ore needed to fabricate the potion that transforms animals into uncanny beasts. Are you up for the chase? </h2>
        <button className="continuebtn" onClick={() => {
          window.location.href = address
        }}>continue hunt --&gt;</button>
        <a className="logoutbtn" href="/logout">am afraid, bye</a>
      </div>
    </>
  );
}

export default Home;