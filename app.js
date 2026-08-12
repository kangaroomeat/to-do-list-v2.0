var toDoSection = document.querySelector(".to-do-section");
var testBtn = document.querySelector(".test-button");

function addItem(text){
    const para = document.createElement('p');
    para.innerText = text;
    toDoSection.appendChild(para);
}

testBtn.onclick=function(){
    console.log("works");
    addItem("dog");
}