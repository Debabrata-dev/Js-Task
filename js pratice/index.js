let newBtn=document.createElement("button");
newBtn.innerText="click me";

newBtn.style.backgroundColor="black";
newBtn.style.color="white";
newBtn.style.height="30px"
newBtn.style.border="none";
newBtn.style.borderRadius="2px";
newBtn.style.padding="8px";
// let id=document.querySelector("body");
// id.insertAdjacentElement("afterbegin",newBtn);
let id=document.querySelector("body").prepend(newBtn);

//Qs2
let para=document.querySelector("p");
para.getAttribute("class");
para.setAttribute("class","newPara");
