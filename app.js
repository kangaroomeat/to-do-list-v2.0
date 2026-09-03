var toDoSection = document.querySelector(".to-do-section");
var inProgressSection = document.querySelector(".in-progress-section");
var completedSection = document.querySelector(".completed-section");
var testBtn = document.querySelector(".test-button");
var popUp1 = document.querySelector(".pop-up-1");
var confirmBtn = document.getElementById("confirm-btn");
var addBtn = document.getElementById("add");
var removeBtn = document.getElementById("remove");
var completedBtn = document.getElementById("add-to-completed-btn");
var username = document.getElementById("username");
var password = document.getElementById("password");
var loginBtn = document.getElementById("login-btn");
const loginForm = document.querySelector(".login-form");
const passwordError = document.getElementById("password-error");
const usernameError = document.getElementById("username-error");
const invalidError = document.getElementById("invalid-error");

function addItem(text){
    const para = document.createElement('p');
    para.innerText = text;
    toDoSection.appendChild(para);
    para.setAttribute("contentEditable", "true");
    para.style.backgroundColor = "white";
    para.style.margin = "10px";

    para.onclick=function(){
       //console.log(this.innerText);
    }

    para.ondblclick=function(){
        //this.remove();
       // inProgressSection.appendChild(this);

       popUp1.style.display="block";

       addBtn.onclick=function() {
        confirmBtn.style.display = "block";

    
        confirmBtn.onclick=function(){
            if(addBtn.checked) {
                //console.log("addBtn is slected");
                inProgressSection.appendChild(para);
                para.setAttribute("contentEditable", "false");
                confirmBtn.style.display = "none";
                popUp1.style.display = "none";
                addBtn.checked = false;

            }
        }

        para.ondblclick=function(){
            
            completedBtn.style.display = "block";

            completedBtn.onclick=function(){
                completedSection.appendChild(para);
                completedBtn.style.display = "none";

                para.ondblclick=function(){
                    console.log("hello");
                }
            }
        }
       }

       removeBtn.onclick=function() {
        confirmBtn.style.display = "block";

        confirmBtn.onclick=function(){
            if(removeBtn.checked) {
                para.remove();
                confirmBtn.style.display = "none";
                popUp1.style.display = "none";
                removeBtn.checked = false;

            }
        }
       
        
       }
        
    }

    


}

/*loginBtn.onclick=function(){
    var usernameVal = username.value;
    var passwordVal = password.value;

    if(usernameVal == "david" && passwordVal == "1234" ) {
        console.log("access granted");
    } else {
        console.log("wrong username or password");
    }
}*/

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



