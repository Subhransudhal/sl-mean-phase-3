let express = require("express");

let app = express();
let emp = {id:100,name:"tony",age:26};

//add middleware
app.use(express.json());

let employees =[
    {id:1,name:"abc",age:21},
    {id:2,name:"abc",age:21},
    {id:3,name:"abc",age:21},
    {id:4,name:"abc",age:21}
]
//http://localhost:9090/sayhello
//get the output in plain text format
app.get ("/sayhello",(req,res)=>{
    res.send("wecome to simple REST API")
})

//http://localhost:9090/sayjson
app.get("/sayjson",(req,res)=>{
    res.json({"msg":"welcome to simple json message"});
})
//http://localhost:9090/empinfo
app.get("/empinfo",(req,res)=>{
    res.json(emp);  //automatically convert js object into json
})
//http://localhost:9090/allemployees
app.get("/allemployees",(req,res)=>{
    res.json(employees);    //to get all employees details.
})  
//http:localhost:9090/singlequeryparam?name=tony
app.get("/singlequeryparam",(req,res)=>{
   // let name = req.query["name"];
    let name = req.query.name;
    res.send("welcome user "+name);
})
// http://localhost:9090/multiplequeryparam?name=raj&pass=123
app.get("/multiplequeryparam",(req,res)=>{
    let name = req.query["name"];
    let pass = req.query["pass"];
    if(name=="raj"&& pass=="123"){
        res.send("successfilly logedin")
    }else{
        res.send("log in failed")
    }
})
 // http://localhost:9090/singlepathparam/ravi  
app.get("/singlepathparam/:match",(req,res)=>{
    let anything = req.params.match;
    res.send("wecome user to path param "+anything);
})
//  http://localhost:9090/multipathparam/tony/1234
app.get("/multipathparam/:match/:pass",(req,res)=>{
    let anything = req.params.match;
    let pass = req.params.pass;
    if(anything=="tony"&&pass=="1234"){
    res.send("wecome user to path param "+anything);
    }else{
        res.send("failed with path param")
    }
})
 //POST METHOD:is used to creat the resource
 // store the information in file or database or arrey
//  http://localhost:9090/storeemployee
 app.post("/storeemployee",(req,res)=>{
    let emp = req.body;
    console.log(emp);
    res.send("data stored");
})
//  http://localhost:9090/upadateemployeesalary
app.patch("/upadateemployeesalary",(req,res)=>{
    let emp = req.body;
    console.log(emp);
    res.send("employee salary updated");
})
//  http://localhost:9090/updateemployee
app.put("/updateemployee",(req,res)=>{
    let emp = req.body;
    console.log(emp);
    res.send("employee details updated successfully");
})
//  http://localhost:9090/deleteemployeeinfo/100
app.delete("/deleteemployeeinfo/:id",(req,res)=>{
    let id = req.params.id;
    res.send("record deleted successfully with id is "+id);
})




app.listen(9090,()=>console.log("server is running on 9090"));