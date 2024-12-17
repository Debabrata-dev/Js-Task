// let promise =new Promise((resolve,reject)=>{
//     console.log("I am a Promise");
//     reject("Some Error");
// })
// console.log(promise);

// function getData(dataId,getNextData){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     console.log("data",dataId);
//     if(getNextData){
//         getNextData();
//     }
//     resolve("Success");
//     },2000)
//   })
// }
// getData(90,()=>{
//     getData(79,()=>{   
//         getData(80,()=>{
//             getData(60,()=>{

//             })
//         })
//     })
// })


function Sum(a,b)
{
    console.log(a+b);
}
function Calculator(a,b,SumCallback){
    SumCallback(a,b);
}
Calculator(12,28,Sum);