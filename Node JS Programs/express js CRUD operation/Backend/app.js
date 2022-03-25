// //load al modules
// let express = require("express");
// let fs = require("fs");
// let cros = require("cors")
// //creat the reference of express module
// let app = express();

// //middleware
// app.use(express.json());  //to enable post data
// app.use(cors());          //to enable cors features
// //now we will creat the
// let products =[]

// //http://localhost:9090/appproductdetails      :get all product
// app.get("/appproductdetails",(req,res)=>{ 
//    let productinfo = JSON.parse(fs.readFileSync("product.json"));
//    res.json(productinfo);
// })


// //http://localhost:9090/productstore   :to store the product

// // {
// //     "pid":100,
// //       "pname":"tv",
// //       "price":55000,
// //       "url":"data:image/jpeg;base64,/9j/4AAQSk
// //     }

// app.post("/productstore",(req,res)=>{
//     let product = req.body;
//     products = JSON.parse(fs.readFileSync("product.json"));
//     let result = products.find(p=>p.pid==product.pid);
//     if(result == undefined){
//     products.push(product);
//     fs.writeFileSync("product.json",JSON.stringify(products));
//     res.send("record stored succcessfully");
//     }else{
//         res.send("id must be unique")
//     }
// })

// //http://localhost:9090/findproductbyid/100
// //http://localhost:9090/findproductbyid/1
// app.get("/findproductbyid/:pid",(req,res)=>{
//     let pid = req.params.pid;
//     products = JSON.parse(fs.readFileSync("product.json"));
//     let result = products.find(p=>p.pid==pid);
//     if(result==undefined){
//         //res.json({"msg":`record not present with id as ${pid}`})  :backstick method
//         //res.send("record not found")
//         res.json({"msg":"record not present with id as "+pid})      //usual method
//     }else{
//         res.json(result);
//     }
// })

// //http://localhost:9090/deleteproductinfo/100
// //http://localhost:9090/deleteproductinfo/1
// app.delete("/deleteproductinfo/:pid",(req,res)=>{
//     let pid = req.params.pid;
//     products = JSON.parse(fs.readFileSync("product.json"));
//     let index = products.findIndex(p=>p.pid==pid);
//     if(index<0){
//         res.send("product not present with pid as "+pid);
//     }else{
//      products.splice(index,1);
//      fs.writeFileSync("product.json",JSON.stringify(products));
//     res.send("record delted succcessfully");   
//     }
// })

// //http://localhost:9090/updateproductdetails
// app.patch("/updateproductdetails",(req,res)=>{
//     let product = req.body;      //update price and url using pid
//     products = JSON.parse(fs.readFileSync("product.json"));
//     let index = products.findIndex(p=>p.pid==product.pid);
//     if(index<0){
//         res.send("product not present with pid as "+product.pid);
//     }else{
//      products[index].price=product.price;
//      products[index].url=product.url
//      fs.writeFileSync("product.json",JSON.stringify(products));
//     res.send("record updated succcessfully");   
//     }
// })



// app.listen(9090,()=>console.log("server is on 9090"));



   
// load all the modules 
let express = require("express");
let fs = require("fs");
let cors = require("cors");

// create the reference of express module 
let app = express();
// middleware 
app.use(express.json());            // to enable post data 
app.use(cors());                    // to enable cors features 

// now we will create the 
let products = []

// http://localhost:9090/productDetails                 : Get all product 
app.get("/productDetails",(req,res)=> {
    let productInfo  = JSON.parse(fs.readFileSync("product.json"));
    res.json(productInfo);
})
// http://localhost:9090/productStore                       : store the product 
/*
{
  "pid":100,                     //this four things are called 
  "pname":"TV",
  "price":85000,
  "url":"https://images.samsung.com/is/image/samsung/in-full-hd-tv-te50fa-ua43te50fakxxl-frontblack-231881877?$720_576_PNG$"
}
*/
app.post("/productStore",(req,res)=> {
    let product = req.body;  
    products = JSON.parse(fs.readFileSync("product.json"));
    let result = products.find(p=>p.pid==product.pid); 
    if(result==undefined){
        products.push(product);   
        fs.writeFileSync("product.json",JSON.stringify(products));
        res.send("Record stored successfully..");           
    }else {
        res.send("Product id must be unique");
    }   
      
})
// http://localhost:9090/findProductById/100
// http://localhost:9090/findProductById/1

app.get("/findProductById/:pid",(req,res)=> {
    let pid = req.params.pid;
    products = JSON.parse(fs.readFileSync("product.json"));
    let result = products.find(p=>p.pid==pid); 
    if(result==undefined){
        //res.json({"msg":`Record not present with pid as ${pid}`})
        res.json({"msg":"Record not present with pid as "+pid});
        //res.send("Record not found")
    }else {
        res.json(result);
    }
})
// http://localhost:9090/deleteProductInfo/1
// http://localhost:9090/deleteProductInfo/100

app.delete("/deleteProductInfo/:pid",(req,res)=> {
    let pid = req.params.pid;
    products = JSON.parse(fs.readFileSync("product.json"));
let index = products.findIndex(p=>p.pid==pid);  // if record present it return that product index position else it return -ve number        
        if(index<0){
            res.send("Product not present with pid as "+pid);
        }else {
            products.splice(index,1);   //1st parameter index position and 2nd parameter number of record to delete from products. 
            fs.writeFileSync("product.json",JSON.stringify(products));
            res.send("Product deleted successfully");            
        }
})
// http://localhost:9090/updateProductInfo
app.put("/updateProductInfo",(req,res)=> {
   console.log("I came here")
    let product = req.body;         // update price and url using pid 
    console.log(product);
    products = JSON.parse(fs.readFileSync("product.json"));
    let index = products.findIndex(p=>p.pid==product.pid);  // if record present it return that product index position else it return -ve number        
        if(index<0){
            res.send("Product not present with pid as "+product.pid);
        }else {
            products[index].price=product.price;
            products[index].url=product.url
            fs.writeFileSync("product.json",JSON.stringify(products));
            res.send("Product updated successfully");            
        }   
})

app.listen(9090,()=>console.log("Server running on port number 9090"));