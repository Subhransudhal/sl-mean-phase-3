let express = require("express");
let dbconnection = require("./config/dbConfig")  // load user defined module
let productRouter = require("./router/productRouter");
let app = express();

dbconnection.connect();       //connect the database



//miidleware
//http://localhost:9090/api/product
//http://localhost:9090/api/product/findproduct

app.use("/api/product",productRouter);





 
app.listen(9090,()=>console.log("server is running on 9090"));