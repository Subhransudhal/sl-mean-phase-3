//load the module and creat the reference of module
let mongoClient = require("mongodb").MongoClient

let url = "mongodb://localhost:27017";

let myDb = "phase3";

mongoClient.connect(url,(err,client)=> {
    if(!err){
        console.log("database connected successfully")
        let db = client.db(myDb);
        db.collection("trainer").deleteMany({tech:"angular"},(err,res)=>{
            if(!err){
                if(res.deletedCount>0){
                    console.log("record deleted successfully")
                }else{
                    console.log("record not present")
                }
                client.close();
            }
        })
    }else{
        console.log(err);
    }
})
