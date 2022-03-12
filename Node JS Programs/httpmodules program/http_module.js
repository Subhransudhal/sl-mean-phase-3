let http = require("http");
let url = require("url");
let loginPage = `
                <html>
                <head>
                </head>
                <body>
                <h2>Login Page</h2>
                <form action="checkuser" >
                <label>UserName</label>
                <input type="text" name="user"/><br/>
                <label>Password</label>
                <input type="password" name="pass"/><br/>
                <input type="submit"/>
                <input type="reset"/>
                </form>
                </body>
                </html>
`

let indexpage =`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>wecome to my simple web page</h2>
    <a href="aboutus">about us</a>
    <a href="contactus">contact us</a>
    <a href="login">login</a>
</body>
</html>`
let server = http.createServer((req,res)=>{
    let pathinfo = url.parse(req.url,true);
    //console.log(pathinfo.pathname)
    res.setHeader("content-type","text/html");
    if(pathinfo.pathname !="/favicon.ico"){
        if(pathinfo.pathname=="/"){
            res.write(indexpage)
        }

        if (pathinfo.pathname=="/contactus"){
            res.write("wecome to contact us page")
            res.write("wecome again")
        }

        if (pathinfo.pathname=="/aboutus"){
            res.write("wecome to about us page")
            res.write("wecome again")
        }

        if (pathinfo.pathname=="/login"){
           // res.write("<h2>wecome to login page</h2>")
           // res.write("wecome again")
           res.write(loginPage);
        }
        if(pathinfo.pathname=="/checkuser"){
            let login = pathinfo.query;
            if(login.user=="raj"&& login.pass=="123"){
                res.write( "<h2>sucessfully loged in</h2>");
            }else{
                res.write("<h2>failed try again</h2>");
            }
        }
}
    res.end();
})

server.listen(9090,()=>console.log("server is up"));