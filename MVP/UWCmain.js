function signup(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = {
      username: username,
      email: email,
      password: password,
    };
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    alert("Successfully signed up");
    window.location.href = "UWClogin.html";
  }
  function login(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if (!user) {
      alert("Please write your username password");
    } else if (
      username == data.username &&
      email == data.email &&
      password == data.password
    ) {
      alert("Successfully logged in");
      window.location.href = "demo.html";
    } else {
      alert("Fail to login");
    }
  }