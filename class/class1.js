class Human{
age=90;
#wt=90;
hight=4;
constructor(newAge,newWight,newHight){
    this.age=newAge;
    this.hight=newHight;
    this.#wt=newWight;
}

get addWeight(){
    return this.#wt;
}

}
let  obj=new Human(99,90,54)
console.log(obj.age);
console.log("This is weight "+obj.addWeight);
console.log(obj.addWeight);
