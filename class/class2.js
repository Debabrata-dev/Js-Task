class Player{
    fname="virat";
    age=37;
    #hg=6;

constructor(newfname,newage,newhigh){
this.age=newage;
this.#hg=newhigh;
this.fname=newfname;
}


getName(){
    console.log(this.fname);
}   
getAge(){
    console.log(this.age);
}
getHg(){
    console.log(this.#hg);
}
get FetchHight(){
    return this.#hg;
}
}
let  p=new Player("Dinesh",40,7);
p.getName();
p.getAge();
p.getHg();
console.log(p.age);
console.log(p.hg);

