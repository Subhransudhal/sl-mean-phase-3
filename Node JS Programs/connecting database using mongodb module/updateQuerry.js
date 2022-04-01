//load the module and creat the reference of module
let mongoClient = require("mongodb").MongoClient

let url = "mongodb://localhost:27017";

let myDb = "phase3";

mongoClient.connect(url,(err,client)=> {
    if(!err){
        console.log("database connected successfully")
        let db = client.db(myDb);
        db.collection("trainer").updateOne({_id:104},{$set:{tech:"angular"}},(err,res)=>{
            if(!err){
                // console.log("record updated");
                // console.log(res);
                if(res.modifiedCount>0  || res.matchedCount>0){
                    console.log("record updated")
                }else{
                    console.log("record did not updated")
                }
            }else{
                console.log(err)
            }
            client.close();
        })
        
       
    }else{
        console.log(err);
    }
})
