let http = require("http");
let url = require("url");

let server = http.createServer((req,res)=>{
    let pathinfo = url.parse(req.url,true);
    console.log(pathinfo.pathname)
    console.log("client send req")
    res.end("wecome to http module")
})

server.listen(9080,()=>console.log("server is up"));