document.addEventListener("DOMContentLoaded", function(){
    var welcomeMessageElement = document.getElementById("welcomeMessage");

    var urlParams = new URLSearchParams(window.location.search);
    var userFullName = urlParams.get("name");

    welcomeMessageElement.innerHTML = "Welcome," + userFullName + "!";
});
