function Sum(a,b){
    console.log(a+b);
}
function calculator(a,b,SumCallback){
  SumCallback(a,b);
}
calculator(12,2,Sum);


function greet(name,callBack){
 console.log(`Hello,${name}`);
 callBack();
}
function SayGoodBye(){
    console.log("Good Bye")
}
greet("Robin hood",SayGoodBye);

//Call back,Call back hell

 
// function getData(dataId,getNextData){
//     setTimeout(()=>{
//       console.log("data",dataId);
//       getNextData();
//     },2000)
// }
// getData(1,()=>{
//     getData(2,()=>{
//      getData(3,()=>{
//         getData(4,()=>{
//             getData(5,()=>{

//             })
//         })
//      })
//     });
// })


function Valid(userName,Pasword){
    console.log(`UserName,${userName}`);
    setTimeout(()=>{
    Pasword();
    },1000);
}
Valid("Dinesh Kartik",()=>{
    console.log("7645");
})