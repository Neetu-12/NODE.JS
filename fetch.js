
// //   var a=fetch('https://jsonplaceholder.typicode.com/users')
// //   .then(a=>console.log(a))


// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())
//   .then(res => res.map(user => user.username))
//   .then(userNames => console.log(userNames));

// import fetch from
import fetch from 'node-fetch';

async  function num(){
    console.log(2);
    const response=await fetch("https://jsonplaceholder.typicode.com/users")
    console.log(responce);
 
    }

     console.log(1);
     num()
     console.log(3);
     