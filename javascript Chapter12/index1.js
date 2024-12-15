// function getData(dataID){
//     setTimeout(()=>{
//      console.log("date",dataID);
//     },2000)
// }
// getData(1);
//Call back function . 
// function getData(dataID,getNextData){
// setTimeout(()=>{
// console.log(dataID);
// if(getNextData){
// getNextData();
// }
// },2000)
// }

// getData("Enter UserName",()=>{
//     getData("Enter password");
// });


// function getData(DataId,getNextData){
//     setTimeout(()=>{
//     console.log("Data",DataId);
//     if(getNextData){
//         getNextData();
//     }},2000)
// }
// callback hell
// console.log("getingdata 1");
// getData(1,()=>{
//     console.log("getingdata 2");
//     getData(2,()=>{
//         console.log("getingdata 3")
//         getData(3,()=>{
//             console.log("getingdata 4")
//             getData(4);  
//         });
//     });
// })


//promises-Promise is for "eventual " compeltion of task . it is an object in js.It is a solution for call backhell .
let promise=new Promise((resolve,reject)=>{

})