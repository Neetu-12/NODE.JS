const axios=require("axios");
// const { error } = require("console");
// axios.get("https://www.digitalocean.com/community/tutorials/js-fetch-api#fetch--asyncawait") 
// .then((data)=>{
//     console.log(data.headers);//
//     // console.log(data);//all data have to come
// }).catch((error)=>{console.log(error);})


// 2))))
axios.get('https://api.github.com/orgs/axios')
  .then(response => {
    console.log((response));
  }, error => {
    console.log(error);
  });