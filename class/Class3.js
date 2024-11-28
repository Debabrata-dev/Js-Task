class Human{
   age=45;
   #wt=80;
   ht=180;

constructor(NewAge,NewWeigt,NewHight){
this.age=NewAge;
this.#wt=NewWeigt;
this.ht=NewHight;
}
get addWeight(){
    return this.#wt;
}
}
let obj=new Human(25,78,5);
console.log(obj.age);
console.log(obj.addWeight);
console.log(obj.ht);