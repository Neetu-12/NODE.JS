const axios=require("axios")
// const fs=require("fs")
// axios.get('https://www.w3schools.com/nodejs/nodejs_filesystem.asp').then((data)=>{
//     // console.log(JSON.stringify(data));
//     fs.writeFileSync("Babita.html",(Object.values(data)))
// }).catch((error)=>{
//     console.log(error);
// })


// const fetch = require("node-fetch");
axios.get("https://www.digitalocean.com/community/tutorials/js-fetch-api#fetch--asyncawait") 
//   method: "GET",
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   }
.then((data)=>{
    console.log(data);
}).catch((suraj)=>{
    console.log(suraj);
})
