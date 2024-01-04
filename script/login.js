document.addEventListener("DOMContentLoaded", function () {
  var loginForm = document.getElementById("loginForm");
  var msg = document.getElementById("msg");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (validateCredentials(username, password)) {
      window.location.href = "welcome.html";
    }
  });

  function validateCredentials(username, password) {
    var isValid = true;

    if (username.trim() === "") {
      msg.innerHTML = "The username you entered is invalid";
      msg.style.color = "red";
      isValid = false;
    } else if (password.trim() === "") {
      msg.innerHTML = "The password you entered is invalid";
      msg.style.color = "red";
      isValid = false;
    }

    return isValid;
  }

  var backtotop = document.getElementById("backtotop");

  window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      backtotop.style.display = "block";
    } else {
      backtotop.style.display = "none";
    }
  });
});
