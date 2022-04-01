let express = require("express");
let router = express.Router();     //t is to creat the router referance
let productController = require("../controller/productController");


router.get("/findproduct",productController.findAllProduct);



module.exports=router;