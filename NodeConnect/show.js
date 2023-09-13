var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017";

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
    function (err, db) {
        if (err) throw err;
        var dbo = db.db("db100");
        const emp = dbo.collection("employees").findOne({},(err,data)=>{
            if(err) throw err;
            else console.log(data);
        });
        
    });