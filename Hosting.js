function greetMe(greet,fullName){
    console.log("hello",fullName);
    greet();
}

function greet(){
    console.log("Greeting for the day")
}

greetMe(greet,"Tea");