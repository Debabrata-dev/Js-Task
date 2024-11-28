class Human{
    age=13;
    #wt=80;//private
    ht=180;

constructor(newAge,newHeight,newWeight){
    this.age=newAge;
    this.ht=newHeight;
    this.#wt=newWeight;
}
walking(){
    console.log("I am Walikng", this.#wt);
}
running(){
   console.log("I am running")
}
get fetchWeight(){
    return this.#wt;
}
   
set modifyWeight(val){
    this.#wt=val;   
}
}
let obj=new Human(50,6,90);
console.log(obj.age);
console.log(obj.ht); 
console.log(obj.fetchWeight)
obj.running();
obj.walking();
