var username = document.getElementById("username");
var password = document.getElementById("password");
var loginBtn = document.getElementById("login-btn");
const loginForm = document.querySelector(".login-form");
const passwordError = document.getElementById("password-error");
const usernameError = document.getElementById("username-error");
const invalidError = document.getElementById("invalid-error");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const usernameVal = username.value;

    if(!usernameVal) {
        console.log("please enter username");
        usernameError.style.display = "block";
        return;
    }

    const passwordVal = password.value;

    if(!passwordVal) {
        console.log("please enter password");
        passwordError.style.display = "block";
        return;
    }

    if(!usernameVal && !passwordVal) {
        console.log("boogaloo");
    }

    if(usernameVal === "dog" && passwordVal === "1234") {
        console.log("access granted");
    } else {
        console.log("password or username is invalid");
        invalidError.style.display = "block";
    }

})





testBtn.onclick=function(){
    //console.log("works");
    addItem(" ");
}



