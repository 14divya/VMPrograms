var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "employee"
}); con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    // var sql = "INSERT INTO emp VALUES ('Ritu', 24)";
    // con.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log("1 record inserted");
    // });
    con.query("SELECT * FROM emp",function(err,result){
        if(err) throw err;
        else console.log(result);
    })
});