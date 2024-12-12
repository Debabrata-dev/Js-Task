let id=document.querySelector('#btn');
id.addEventListener("click",function(){
    console.log("button one is clicked");
    id.style.cssText="background-color:black;color:white;padding:8px";
})

let id1=document.querySelector('#btn1');
id1.addEventListener("click",(eve)=>{
    console.log("Second button was clicked")
    console.log(eve);
    console.log(eve.type);
})
//3 button in javascript
let id2=document.querySelector('#btn2');
id2.addEventListener('click',play);
function play(){
    console.log("3rd Button Was clicked")
    id2.style.cssText="background-color:black;color:white;padding:8px";
}
id2.removeEventListener("click",play);