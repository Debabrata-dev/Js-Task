//Promise is for "eventual" completion of task. It is a solution to callback hell.It is an object in javascript to call back hell .
//let promise =new Promise((resolve,reject)=>{....});

function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
      console.log("dataId",dataId);
      if(getNextData){
        getNextData
      }
     },2000)   
    })
}

getData(10,()=>{
    getData(20,()=>{
        getData(30,()=>{

        })
    })
})


function Sum(a,b){
    console.log(a+b);
}
function Calculator(a,b,Sum){
Sum(a,b);
}
Calculator(9,8,Sum)
