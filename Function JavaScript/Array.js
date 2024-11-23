let arr=[1,2,3,4,5,6];
console.log(arr);
//Array constructor 
let Arr1=new Array(12,21,32,12,32,33);
Arr1.push("Blackman");
Arr1.pop("Blackman");
// console.log(Arr1); 

//Shift and Unshift
let arr1=[12,13,14,15];
arr1.shift();
arr1.unshift(23);
// console.log(arr1);

//Slice Array
let Arr2=[12,13,14,15,16];
console.log(Arr2.slice(2,4));
//Splice
// Arr2.splice(1,2,'Kunal');
// console.log(Arr2);
Arr2.splice(1,0,"Debabrata");
console.log(Arr2);

//MAP
let arr2=[10,20,30];
let ansArray=arr2.map((number)=>{
    return number*number;
})
console.log(ansArray);
 let ans1=arr2.map((number)=>{
    return number+10;
 })
 console.log(ans1);

//map1
let num=[10,20,30,40,50];
num.map((number,index)=>{
    console.log(number);
    console.log(index)
})

let ans2=num.map((digit)=>{
    return digit+2;
})
console.log(ans2);