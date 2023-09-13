var fs = require("fs");
// fs.writeFile("test.txt", "Hello World!", function (err) {
//   if (err) console.log(err);
//   else console.log("Write operation complete.");
// });
fs.appendFile("test.txt","\nAppended content", function(err){
    if(err) console.log(err);
    else console.log("Content updated");
})
fs.readFile("test.txt",(err,data)=>{
    if(err) console.log(err);
    else console.log(data.toString());
});
fs.unlink("test.txt",(err)=>{
    if(err) console.log(err);
    else console.log("File deleted");
})
fs.readdir(__dirname,(err,data)=>{
    if(err) console.log(err);
    else console.log(data);
})
fs.mkdir("music",(err,data)=>{
    if(err) console.log(err);
    else console.log("Directory created");
})

fs.rmdir("music",(err,data)=>{
    if(err) console.log(err);
    else console.log("Directory deleted");
})
