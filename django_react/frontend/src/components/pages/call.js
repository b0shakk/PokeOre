import axios from "axios";

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
  
  
  const handleClick = (e, ans, level) => {
    var answers = ["bubble", "bhubaneswar", "fifteen", "four", "underwater", "phscale", "naoh", "pokemon", "0139"];

    var CSRF_TOKEN = getCookie('csrftoken');
    if (!e)
      return;

    console.log(answers[level-1])
    console.log(ans)

    if(level===2 && ans==="kolkata")
      window.location.href= "/game-over"  

    if(level===3 && ans!=="fifteen")
      window.location.href= "/game-over"  

    if(answers[level-1]!=ans){
      axios.post('/negate-person/', { 'username': e.user, 'score': "0", 'current_level': "0", 'wrong_attempts': "0"}, {
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
      return;
    }
    console.log(e.user);
    axios.post('/update-person/', { 'username': e.user, 'score': "0", 'current_level': "0", 'wrong_attempts': "0"}, {
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
    var new_level= level+1;
    var text = "/level"+new_level
    window.location.href = text
  }

export default handleClick;