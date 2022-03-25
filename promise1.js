async function num(){
    console.log("Inside Neetu Function");
    // return "Neetu"
    const response=await fetch('https://api.github.com/users');
    console.log('before response');
    const users=await response.json();
    console.log('users resolved');
    return users
}
console.log("Before calling Neetu");
let a=num()
console.log("After calling  Neetu");
console.log(a);
a.then(data=>console.log(data))
console.log("Last line of this js file ");