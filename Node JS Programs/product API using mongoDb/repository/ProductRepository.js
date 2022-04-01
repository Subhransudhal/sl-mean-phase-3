let dbCollection = require("../config/dbConfig");


exports.findAllProduct =async()=>{
    // let product = await dbCollection.getCollection("product");
    // let res = await product.find({}).toArray();
    // return res;
    return dbCollection.getCollection("product").find().toArray();

}