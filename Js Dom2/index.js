let tit=document.querySelector("h1");
console.log(tit);
let tit0=tit.getAttribute("class");
console.log(tit0);


let tit1=document.querySelector("div");
console.log(tit1);
let tit2=tit1.getAttribute("id");
console.log(tit2);
let id=document.querySelector("#box");
id.style.backgroundColor="black";
id.style.fontSize="20px";
id.innerText="Hello";
id.textContent="Bomm";

let use=document.createElement("h1");
use.textContent="Hello";
let e1=document.querySelector(".ele");
e1.appendChild(use);

let hi=document.querySelector("body");
hi.style.backgroundColor="pink";


