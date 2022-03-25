
// // const greeting = (name = "Anonymous") => "Hello " + name;


// // console.log(greeting("John"));
// // console.log(greeting());


// // const increment = (number, value=1) =>number+value
// // console.log(2,4)


// // function howMany(...args) {
// //     return "You have passed " + args.length + " arguments.";
// //   }
// //   console.log(howMany(0, 1, 2));
// //   console.log(howMany("string", null, [1, 2, 3], { }));


// // const HIGH_TEMPERATURES = {
// //     yesterday: 75,
// //     today: 77,
// //     tomorrow: 80
// //   };
  
// //   // Only change code below this line
// //   const {today, tomorrow} = HIGH_TEMPERATURES;
// //   console.log(HIGH_TEMPERATURES);

// // const HIGH_TEMPERATURES = {
// //     yesterday: 75,
// //     today: 77,
// //     tomorrow: 80
// //   };
  
// //   // Only change code below this line
// // const{today:highToday,tomorrow:highTomorrow}=HIGH_TEMPERATURES
// // console.log(HIGH_TEMPERATURES);

// // const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
// // console.log(a, b, c);

// // let a = 8, b = 6;
// // // Only change code below this line
// // [a,b]=[b,a]
// // console.log(a,b);


// // const vehicleOne = {
// //     brand: 'Ford',
// //     model: 'Mustang',
// //     type: 'car',
// //     year: 2021, 
// //     color: 'red'
// //   }
  
// //   myVehicle(vehicleOne);
  
// //   function myVehicle({type, color, brand, model}) {
// //     const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
// //     console.log(message);
// //   }


// // fetch('https://jsonplaceholder.typicode.com/postsZZZ', options)
// //   .then(res => {
// //     if (res.ok) {
// //       return res.json();
// //     } else {
// //       return Promise.reject({ status: res.status, statusText: res.statusText });
// //     }
// //   })
// //   .then(res => console.log(res))
// //   .catch(err => console.log('Error, with message:', err.statusText));

// // fetch('https://jsonplaceholder.typicode.com/users')
// //   .then(res => res.json())
// //   .then(res => res.map(user => user.username))
// //   .then(userNames => console.log(userNames));
  

// const fs=require("fs")
// const axios=require("axios")
// // var b=[]
// axios.get("http://saral.navgurukul.org/api/courses ").then((a)=>{
//   r=[]
//   // for (i in a.data){
//     // console.log(a.data);
//     b=a.data
//     c=JSON.stringify(b)
//     fs.writeFileSync("nor.json",c)
//     // fs.appendFileSync("nor.json",c)
//     // console.log(c);
//   // }
//   // console.log(a.data);
// })


// // console.log(b);
// //     var num=JSON.stringify(a.data)
// // // console.log(num);
// // fs.writeFileSync("stringify.json",num)
// // n=1
// // r=[]
// // for(i of a.data["availableCourses"]){
// //     r.push(i.id)
// //     // console.log(n,i.name,"---",r);
// // //     n=n+1
// // }console.log(r);
// // })

var complete=true
const prom=new Promise((res,rej)=>{
  if(complete){
    res("success")
  }
  else{
    rej("maybe")
  }
})
console.log(prom);