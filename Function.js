const arr=[
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a-b;
    },
    function(a,b){
        return a*b;
    },
    function(a,b){
        return a**b;
    }
]

let first=arr[2];
let ans=first(5,2);
console.log(ans);


let obj={
    age:25,
    wt:89,
    ht:4,
    great:()=>{
      console.log("Hello Dunia");
    }
}
console.log(obj.age);