
let mongoClient = require("mongodb").MongoClient

let url = "mongodb://localhost:27017/"
let dbclient;
exports.connect = ()=>{
    mongoClient.connect(url).then(res=>{
        console.log("database connected successfully")
       dbclient = res;          // connection details store or assign in dbClient variable
    }).catch(err=>{
        console.log(err)
    })
}

exports.getCollection = (name)=>{
    return dbclient.db("phase3").collection(name);
}