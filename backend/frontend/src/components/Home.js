import "./HomeStyles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import pokeore from "./logo.png";
// import { Button } from "@mui/material";
// import bgimg from "./cowboy_bebop.jpg";


function Home() {
  const [address, setNewAddress] = useState("/level")
  const [user, setUser] = useState("")
  useEffect(() => {
    var uname=localStorage.getItem('uname')
    if(uname!=null)
      setUser(uname)
    else
      window.location.href='/login'
    fetchAdd()
  }, [])

  function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
  var CSRF_TOKEN = getCookie('csrftoken');

  const fetchAdd = async (e) => {
    try {
        const res = await axios.post('/getAddress/', {
            username:localStorage.getItem('uname')
        },
        {
            headers: {
              'X-CSRFToken': CSRF_TOKEN,
              "Content-Type": 'application/json',
            },
          });
        console.log(res.data.level)
        setNewAddress('/level'+res.data.level)
    } catch (e) {
        window.alert('invalid credentials');
    }
}
  // function getEntry() {
  //   axios({
  //     method: "GET",
  //     url: "/api/user/",
  //   }).then((response) => {
  //     const data = response.data
  //     console.log(data)
  //     setNewEntry(data)
  //     setNewAddress(address+data.level)
  //     console.log(address)
  //   }).catch((error) => {
  //     if (error.response) {
  //       console.log(error.response);
  //       console.log(error.response.status);
  //       console.log(error.response.headers);
  //     }
  //   })
  // }

  return (
    <>
      <div className="home">
        <img src={pokeore} alt={pokeore} height="300"/>
        <h1>Welcome, {user}</h1>
        <h2>You are an alchemist after the well-sought ore needed to fabricate the potion that transforms animals into uncanny beasts. Are you up for the chase? </h2>
        <button className="continuebtn" onClick={() => {
          window.location.href = address
        }}>continue hunt --&gt;</button>
       <button className="logoutbtn" onClick={()=>{
        localStorage.removeItem('uname')
        window.location.href='/login'
       }}>am afraid, bye</button>
      </div>
    </>
  );
}

export default Home;