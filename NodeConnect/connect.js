var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017";

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
    function (err, db) {
        if (err) throw err;
        var dbo = db.db("db100");
        dbo.createCollection("employees", function (err, res) {
            if (err) throw err;
            console.log("Collection created!");
            db.close();
        });
        dbo.collection("employees").insertOne({"name":"raj","age":23},function(err,res){
            if(err) throw err;
            else console.log("Document inserted");
        });
        
    });