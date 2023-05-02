import React, { useContext, useState } from 'react'
// import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';
import User from './user'


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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

    const loginUser = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/login-api/', {
                username:username, 
                password:password
            },
            {
                headers: {
                  'X-CSRFToken': CSRF_TOKEN,
                  "Content-Type": 'application/json',
                },
              });
            
            if (res.data.username!=''){
                localStorage.setItem('uname',res.data.username)
                window.location.href='/'
            }
        } catch (e) {
            window.alert('invalid credentials');
        }
    }

    return (
        <div>
            <div className="pleasant">
                <div className="wrapper login">
                    <div className="container">
                        <div className="col-left">
                            <div className="login-text">
                                <h2>Welcome!</h2>
                                {/* <p>New here?</p> <NavLink to="/signup" className="btn">Sign Up</NavLink> */}
                            </div>
                        </div>
                        <div className="col-right">
                            <div className="login-form">
                                <h2>Login</h2>
                                <form method="POST">
                                    <p> <label>Username<span>*</span></label> <input value={username} onChange={((e) => setUsername(e.target.value))} name="username" id="username" type="text" placeholder="Username" required /> </p>
                                    <p> <label>Password<span>*</span></label> <input value={password} onChange={((e) => setPassword(e.target.value))} name="password" id="password" type="password" placeholder="Password" required /> </p>
                                    <p> <input type="submit" value="Log In" onClick={()=>(loginUser)} /> </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login