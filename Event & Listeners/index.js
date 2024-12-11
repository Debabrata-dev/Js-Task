// let a1=document.querySelector('#fpara');
// a1.addEventListener('click',changeText); 

// function changeText(){
//     let a1=document.querySelector('#fpara');
//     a1.textContent="Hello Airtel";

// }

//How to remove event listener.
//a1.removeEventListener('click',changeText);

// let e1=document.querySelector('#fanchor');
// e1.addEventListener('click', function(event){
//     event.preventDefault();
//     e1.textContent="click don";
// })


// let e2=document.querySelector('#des');
// e2.addEventListener('click',function(){
//     e2.textContent="Bharat";
// }) 

let paras=document.querySelectorAll('p');
 for(let i=0;i<paras.length;i++){
    let para=paras[i]; 
    para.addEventListener('click',function(){
        alert("You click on para: "+ (i+1));
    })
 }
