// let fHeading=document.createElement('h1');
// fHeading.append("VIRAT");
// let bodyTag=document.querySelector('body')
// bodyTag.appendChild(fHeading);
let mydiv=document.querySelector('#mydiv');

let newElement=document.createElement('span');
newElement.textContent="DON"
mydiv.insertAdjacentElement('beforebegin',newElement);