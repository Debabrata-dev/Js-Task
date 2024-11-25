let arr=[12,11,13,14,51];
arr.push(45);
console.log(arr);

console.log(arr.slice(2,4));

let arr1=[90,80,70,60,50,40];
arr1.splice(1,1,"Deba");
console.log(arr1);

//Array.splice(index,remove-count,item-list)

let arr2=[15,52,10,25,35,45,55];
let evenarray=arr2.filter((Number)=>{
    return Number%2==0;
})
console.log(evenarray);

let arr3=[12,13,'deba','kunal',null];
let ans1= arr3.filter((value)=>{
    if(typeof(value)===String){
      return true;
    }
})

