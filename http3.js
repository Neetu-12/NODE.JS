// const http=require("http")
// http.createServer((req,res)=>{
//     res.write("This is my first web")
//     res.end()
// })
// .listen(4000,()=>{
//     console.log("this is server");
// })


// var http = require('http');

// http.createServer(function (req, res) {
//   // add a HTTP header:
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('Hello World!'); 
//   res.end();
// }).listen(8080);

// promiseses...!!!
// var complete=true
// var prom=new Promise((resolve,reject)=>{
// if(complete){
//     resolve("success")
//     }
// else{
//     reject("not success")
//     }
// });
// console.log(prom);

async function num(){
    console.log("hiii");
    await console.log("after hiii, I will print")
    .then(()=>{
        console.log("don");
    })
    .catch((error)=>{
        console.log(error);

    })
}
num()
console.log("ok");


// if u r using the capital letter in folder u can't use the (npm init -y), u have to only using the (npm init)