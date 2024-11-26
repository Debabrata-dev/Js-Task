// let arr=[10,20,30,40];
// let ans=arr.reduce((acc,curr)=>{
//  return acc+curr;
// },0)
// console.log(ans);

// let arr1=[10,20,30,40];
// let ans1=arr1.reduce((acc,curr)=>{
//     return acc+curr;
// },10);
// console.log(ans1);

// let arr2=[9,1,7,4,2,8];
// arr2.sort();
// console.log(arr2);
// console.log(arr2.indexOf(9));

// let arr=[10,20,30,40,50];
// arr.forEach((value,index)=>{
//     console.log("Number: ",value,"Index: ",index);
// })
//Array For Each
// for(let i=0;i<arr.length-1;i++){
//     console.log(arr[i]);
// }


//Array For In
// let obj={
//     name:"deba",
//     age:23,
//     weight:89,
//     height:"6ft lin",
//     greet:function(){
//         console.log("Hello Jee Kaise Ho Saare");
//     }
// }
// for(let key in obj){
//     console.log(key," ",obj[key]);
// }


//Array for-of loop 
// let arr=[10,20,30,40];
// for(let value of arr){
//   console.log(value);
// }

// let fullName="Dabar";
// for(let val of fullName){
//     console.log(val);
// }


let arr=[10,20,30,40,50,60];
function getSum(arr){
    let sum=0;
   arr.forEach((value)=> {
    sum=sum+value;
   });
   return sum;
}
let totalSum=getSum(arr);
console.log(totalSum);

