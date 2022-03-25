const fs=require("fs")
const axios=require("axios")
r=[]
axios.get("http://saral.navgurukul.org/api/courses ").then((a)=>{
    // console.log(JSON.stringify(a.data))
//     var num=JSON.stringify(a.data)
// fs.writeFileSync("stringify.json",num)
// n=1
// r=[]
for(i of a.data["availableCourses"]){
    r.push(i.id)
    console.log(n,i.name,"---",r);
    n=n+1
}
// console.log(r);
})



// var user=require("readline-sync").questionInt("enter no:-")
// // var axios1=require("axios1")
// ex=fetch("http://saral.navgurukul.org/api/courses"+string(id[user])+"/exercises")
// b=JSON.stringify(ex)
// console.log(b);





// })
// num=JSON.stringify(a)
// fs.writeFileSync("stringify.json",num,(error)=>{
//     console.log("done");
// })