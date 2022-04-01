//load the module and creat the reference of module
let mongoClient = require("mongodb").MongoClient

let url = "mongodb://localhost:27017";

let myDb = "phase3";

mongoClient.connect(url,(err,client)=> {
    if(!err){
        console.log("database connected successfully")
        let db = client.db(myDb);
        let emp = {_id:105,tname:"lony",tech:"python"}
        db.collection("trainer").insertOne(emp,(err1,res)=>{
            if(!err1){
                console.log("record insrted successfully")
                console.log(res);
            }else{
                console.log(err1)
            }
            client.close();
        })
    }else{
        console.log(err);
    }
})