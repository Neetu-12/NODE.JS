// var fs=require("fs")
var axios=require("axios")
r=[]
n=axios.get("http://saral.navgurukul.org/api/courses ").then((e)=>{
console.log(e.data);
for (i in e.data["availableCourses"]){
}
// console.log(e[i]);
console.log(e.data);

// b=e[i]

})
// console.log(a);