// let heading=document.querySelector("#heading");
// heading.innerHTML="ftdr";


// let para=document.querySelectorAll(".para1");
// console.log(para);
// para[0].innerHTML="DOG";
// para[0].style.backgroundColor="black";
// para[0].style.color="white";
let btn=document.querySelector("button");
btn.style.fontSize="40px";

let page=document.querySelector("body");
page.style.transition="1s";

function change(){
    if(page.style.backgroundColor!='black'){
        page.style.backgroundColor='black';
        page.style.color="white";
    }
    else{
        page.style.backgroundColor="white";
        page.style.color="black";
    }
}

