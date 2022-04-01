//load the module and creat the reference of module
let mongoClient = require("mongodb").MongoClient

let url = "mongodb://localhost:27017";

let myDb = "phase3";

mongoClient.connect(url,(err,client)=> {
    if(!err){
        console.log("database connected successfully")
        let db = client.db(myDb);
        // let cursor = db.collection("trainer").find({});
        //let cursor = db.collection("trainer").find({_id:100});
        let cursor = db.collection("trainer").find({tech:"java"});
        cursor.forEach(e=>{
            console.log(e);    // to show all data
            //console.log("tname "+e.tname+"tech "+e.tech); //for particular data
            client.close();
        })
    }else{
        console.log(err);
    }
})
