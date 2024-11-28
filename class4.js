//defult function Patameter

function sayName(myName="Prabhu Deva", lastName="Singh"){
 console.log("My Name IS:",myName,lastName);
}
sayName("Love Babbar","Das");

function solve(value={age:45,wt:90,ht:7}){
    console.log("Hello Ji",value);
}
solve();

function getAge(){
    return 58;
}

function utility(name="Love", age=getAge()){
    console.log(name," ",age);
}
utility();
utility("Don","80");