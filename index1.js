let a=document.querySelector('#name');
let val="first";
a.addEventListener("click",change);
function change(){
    if(val==="first"){
        val="sec";
        a.textContent="Hello Brother";
    }
    else{
        val="first";
        a.textContent="Hello Friend"
    }

}