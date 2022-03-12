let express = require("express");
let fs = require("fs");

let app= express();
//middlewARE
app.use(express.json());

//now we will creat the
let product=[]

//http://localhost:9090/productdetails

//body part-:
    // {"pid":100,"pname":"TV"."price":85000,"url":paste image}

app.get("/appproductdetails",(req,res)=>{
    let productInfo = JSON.parse(fs.readFileSync("product.json"));
    res.json(productInfo);
})

app.post("/productstore",(req,res)=>{
    let product = req.body;
    products=JSON.parse(fs.readFileSync("product.json"));
    let result = product.find(p=>p.pid==product.pid);
    if(result==undefined){ 
    products.push(product);
    fs.writeFileSync("product.json",JSON.stringify(products));
    res.send("record stored successfully..");
    }else{
        res.send("product id must be unique")
    }
})


app.get("/findproduct/:pid",(req,res)=>{
    let pid = req.params.pid;
    products=JSON.parse(fs.readFileSync("product.json"));
    let result = product.find(p=>p.pid==product.pid);
    if(result==undefined){ 
    res.json({"msg":'record not present with id as ${pid}'});
    }else{
        res.json(result);
    }
    })

    app.delete("/deleteproductInfo/:pid",(req,res)=>{
        let pid = req.params.pid;
        products = JSON.parse(fs.readFileSync("product.json"));
        let index = products.findIndex(p=>p.pid==pid);
        if(index<0){
            res.send("product not present with pid as "+pid);
        }else{
            products.splice(index,1);
            fs.writeFileSync("product.json",JSON.stringify("products"));
            res.send("product deleted successfully");
        }
    })


app.path("/updateproductdeatils",(req,res)=>{
    let product =req.body;
    products = JSON.parse(fs.readFileSync("product.json"));
    let index = products.findIndex(p=>p.pid==pid);
    if(index<0){
        res.send("product not present with pid as "+pid);
    }else{
        products[index].price= product.price;
        products[index].url=product.url;
        fs.writeFileSync("product.json",JSON.stringify("products"));
        res.send("product deleted successfully");
    }
})





app.listen(9090,()=>console.log("server is running on 9090"))