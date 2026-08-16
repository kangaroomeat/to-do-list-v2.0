var toDoSection = document.querySelector(".to-do-section");
var inProgressSection = document.querySelector(".in-progress-section");
var testBtn = document.querySelector(".test-button");
var popUp1 = document.querySelector(".pop-up-1");

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
        
    }


}





testBtn.onclick=function(){
    //console.log("works");
    addItem(" ");
}

