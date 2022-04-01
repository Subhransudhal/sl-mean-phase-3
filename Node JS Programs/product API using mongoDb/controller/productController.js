let productrepository = require("../repository/ProductRepository");


exports.findAllProduct = async(req,res)=>{
    let products = await productrepository.findAllProduct();
    res.json(products);
}