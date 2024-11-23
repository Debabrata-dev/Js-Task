//defination
function sayMyNam(){
 console.log("Debabrata Das");   
}
sayMyNam();

function PrintCount(){
    for(let i=1;i<=10;i++){
        console.log(i);
    }
}
PrintCount();

//Parameterize FUnction

function getAvg(n1,n2){
    let avg=(n1+n2)/2;
    console.log(avg);
}
getAvg(12,23);

//return Function
function getSum(a,b,c){
    let sum=a+b+c;
    return sum;
}
let ans=getSum(12,12,12)
console.log(ans);
//
function getSub(d,f,e){
    let Sub=d-f-e;
    
    return Sub;
}
let ans1=getSub(9,2,1);
console.log(ans1);
//
function getName(firstName,lastName){
   let fullName=firstName+lastName;
   return fullName;
}
let fullname=getName("Debabrata ","Das");
console.log(fullname);

//
function getMultiplication(a1,b1){
    return a1*b1;
}
console.log(getMultiplication(12,2))

let getMulti=function(a2,b2){
    return a2*b2;

}
console.log(getMulti(9,9));

function square(a,b){
    return a**b;
}
let val=square(9,2);
console.log(val);
