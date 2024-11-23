let getSequare=(x,y)=>{
    let ans=x**y;
    return ans;
}
console.log(getSequare(2,2));
//
let add=(a,b)=>{
   let ans=a+b;
   return ans;
}
console.log(add(9,8))
//
let Sub=(a,b)=>{
 let ans=a-b;
 return ans;
}
console.log(Sub(9,2))

let divid=(a,b)=>{
    let ans=a/b;
    return ans;
}
console.log(divid(9,3));

let obj={
    name:"Debabrata",
    Age:22,
    weight:70,
}
console.log(obj);

let Student={
    "First Name":"Barun",
    "Last Name":"Aroin",
    "Age":37,
   getMark:function(){
    console.log("A gread");
   }
}
Student.getMark();
console.log(typeof Student );






