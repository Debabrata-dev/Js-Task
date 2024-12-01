// console.log("hello")
// window.console.log("Hello2");
// console.log(document.body);
// console.log(document.head);
// run time or dynamically when user acess the website at this time when we canage anything at this time we use js dom
// console.log(document.body.childNodes[1]);
// console.log(document.body.childNodes[3]);
// console.log(document.body.childNodes[5]);
// console.log(document.body.childNodes[7]);
      //DOM document.getElementById
// let heading=document.getElementById('heading');
// console.log(heading);

// let header=document.getElementsByClassName("head2");
// console.log(header)

// let button=document.getElementById("myId");
// console.log(button);

// let Allh1=document.getElementsByTagName('h1')
// console.log(Allh1);

    //Dom document.querySelector
let firstEl=document.querySelector(".head2");
console.log(firstEl);
//gives us to first element
let allEl=document.querySelectorAll("p");
console.log(allEl);

let seEl=document.querySelector("#heading");
console.log(seEl);
//Tag name we can reutn by the id name
let ans=myId.tagName;
console.log(ans);