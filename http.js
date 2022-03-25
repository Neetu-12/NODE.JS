const http=require("http")
http.createServer((req,respo)=>{
    respo.write("Hello I'm Neetu sah...");
    respo.end()
}).listen(4500);
