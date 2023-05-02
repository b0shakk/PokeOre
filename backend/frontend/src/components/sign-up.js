import React, { useState } from 'react'
// import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';
import './Signup.css'

function Signup() {
    // const navigate = useNavigate();

    const [user, setUser] = useState({  // user details provided in form input field
        name: "", password: "", email: ""
    });

    const handleInputs = (e) => {
        let name = e.target.name; // gets the name of the input field the user is currently typing in
        let value = e.target.value; // value of whatever the user is typing
        setUser({ ...user, [name]: value }); // user details updated in state
    };
    function getCookie(name) {
        // console.log("cookie fun");
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
          var cookies = document.cookie.split(';');
          for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
            //   console.log(cookieValue);
              break;
            }
          }
        }
        return cookieValue;
      }
    var CSRF_TOKEN = getCookie('csrftoken');

    const postData = async (e) => {
        e.preventDefault();
        try {
            const { name, password, email } = user;
            const res=await axios.post('/sign-up/',
                { name, password, email }, // sends data to backend, accessed from req.body
                {
                    headers: {
                      'X-CSRFToken': CSRF_TOKEN,
                      "Content-Type": 'application/json',
                    },
                  }
            );

            if (res.data.username!=''){
                window.location.href='/login';
            }
        } catch (err) {
            window.alert(err.response.data.error);
        }
    }

    return (
        <div class="pleasant">
            <div class="wrapper login">
                <div class="container">
                    <div class="col-left">
                        <div class="login-text">
                            <h2>Welcome!</h2>
                            <p>Already have an account?<br /></p> 
                            <a href="/login" className="btn">Log In</a>
                        </div>
                    </div>
                    <div class="col-right">
                        <div class="login-form">
                            <h2>Sign Up</h2>
                            <form method="POST">
                                <p> <label>Username<span>*</span></label> <input name="name" id="name" value={user.name} onChange={(e) => handleInputs(e)} type="text" placeholder="Username" required /> </p>
                                <p> <label>Email<span>*</span></label> <input name="email" id="email" value={user.email} onChange={(e) => handleInputs(e)} type="email" placeholder="Email" required /> </p>
                                <p> <label>Password<span>*</span></label> <input name="password" id="password" value={user.password} onChange={(e) => handleInputs(e)} type="password" placeholder="Password" required /> </p>
                                <p> <input type="submit" value="Sign In" onClick={postData} /> </p>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Signup