//load the module
let express = require("express");
let bodyparser = require("body-parser");
 let fs = require("fs");
 loginDetails = [];
 loginDetails = JSON.parse(fs.readFileSync("login.json"));

//we have to creat the referance of express module
let app = express();
//adding middleware module

app.use(bodyparser.urlencoded({extended:true}));  //is use to enable from body method

app.get("/sayhello",(req,res)=>{
    console.log("client send request");
res.send("wecome to simple express js module operation");
})
app.get("/aboutus",(req,res)=>{
    res.send("about us page")
})
app.get("/contactus",(req,res)=>{
    res.send("contact us page")
})
app.get("/info",(req,res)=>{
    res.send("<font color=red>welcome to express js</font>")
})
app.get("/anything",(req,res)=>{
    //res.sendFile("sample.html");
    //res.sendFile("C:\\Users\\Himanshu\\simlilearn\\sl-mean-phase-3\\Node JS Programs\\express module")
    //res.sendFile(__dirname);   //_dirname : is a global proerty, which provide current directory path
    //res.sendFile(__dirname+"\\index.html");  (THIS METHOD IS NOT WORKING FOR ME)
   res.sendFile("\\sample.html", {root: __dirname});
})

app.get("/",(req,res)=>{
    res.sendFile("\\index.html",{root:__dirname});
})

app.get("/loginget",(req,res)=>{
res.sendFile("\\loginget.html",{root:__dirname});
})

app.get("/loginpostt",(req,res)=>{
    res.sendFile("\\loginpost.html",{root:__dirname});
 })

app.get("/checkuser",(req,res)=>{
    let email = req.query.email;
    let pass = req.query.pass;
    let result = loginDetails.find(ll=>ll.email==email  && ll.pass==pass);
    if(result != undefined){
        res.send("successfully logedin")
    }else{
        res.send("failuer try once again")
    }
})

app.post("/checkuser",(req,res)=>{
   let login = req.body;
   //console.log(login)
   // res.send("post method called..")
   let result = loginDetails.find(ll=>ll.email==login.email && ll.pass==login.pass);
    if (result != undefined){
       res.send("successfully logedin")
    }else{
        res.send("failed try again");
    }
})

 app.get("/signuppageopen",(req,res)=>{
    res.sendFile("\\signup.html",{root:__dirname});
})

app.post("/signup",(req,res)=>{
    let login = req.body;
    if(loginDetails.length>0){
       let result = loginDetails.find(ll=>ll.email==login.email);
       if(result==undefined){
        loginDetails.push(login);
        fs.writeFileSync("login.json",JSON.stringify(loginDetails));
        res.send("account cereated successfully");
       }else{
        res.send("email id must be unique");
       }
     }else{
       loginDetails.push(login);
       fs.writeFileSync("login.json",JSON.stringify(loginDetails));
       res.send("account cereated successfully");  
     }
})






app.listen(8080,()=>console.log("server is running on 8080"))