// const fetch = require("node-fetch");

// fetch("https://www.digitalocean.com/community/tutorials/js-fetch-api#fetch--asyncawait") 

// .then((data)=>{
//     console.log(data);
// }).catch((suraj)=>{
//     console.log(suraj);
// })

var fetch=require("node-fetch")
fetch('https://api.github.com/orgs/axios')
  .then(response => response.json())    // one extra step
  .then(data => {
    console.log(data) 
  })
  .catch(error => console.error(error));