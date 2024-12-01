// let heading2=document.querySelector("h2");
// console.log(heading2.innerText);

// heading2.innerText=heading2.innerText+"ABCD"//concatintion

let divs=document.querySelectorAll(".jsp");
// div[0].innerText="HELOENEO";
// div[0].innerHTML="<i>HELLOO</i>";
// div[1].innerText="GGGIGIG";
// div[1].innerHTML="<i>GGGIGIG</i>";
// div[2].innerText="ABWUVA";
// div[2].innerHTML="<b>ABWUVA</b>"
let idx=1;
for(div of divs){
    div.innerText=`new uniqure value${idx}`;
    idx++;
}

