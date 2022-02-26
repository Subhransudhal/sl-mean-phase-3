let http =require("http");

//ES5 style

//let server = http.createServer(function(request,response){
//})

//ES6 style

let server= http.createServer((request,response)=>{
   response.end("wecome to simple http module");
})

server.listen(9090,"localhost",()=>console.log("server is running on port  no 9090 "))
//port no must be in between 1 to 65335