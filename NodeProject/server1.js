// var http = require('http');
// http.createServer(function (request, response) {

//     if (request.url == '/') {
//         response.writeHead(200, { 'Content-Type': 'text/html' });
//         response.write('<h1>Hello Node!!!!</h1>\n');
//         response.end();
//     } else if (request.url == "/home") {
//         response.writeHead(200, { 'Content-Type': 'text/html' });
//         response.write('<h1>This is home page!</h1>\n');
//         response.end();
//     } else if (request.url == "/registration") {
//         response.writeHead(200, { 'Content-Type': 'text/html' });
//         response.write('<h1>This is registration page!</h1>\n');
//         response.end();
//     } else if (request.url == "/contact") {
//         response.writeHead(200, { 'Content-Type': 'text/html' });
//         response.write('<h1>This is contact page!</h1>\n');
//         response.end();
//     } else {
//         response.end("Invalid request");
//     }
// }).listen(3000);
// console.log('Server running at http://localhost:3000');

var http = require('http');
var fs = require('fs');
http.createServer(function (request, response) {

    if (request.url == '/' || request.url == '/home') {
        // fs.readFile('./index.html', function (err, data) {
        //     response.writeHead(200, { 'Content-Type': 'text/html' });
        //     response.write(data);

        //     return response.end();
        // });
        response.writeHead(200,{"Content-type":"text/html"});
        response.write("<h2>This is the home page</h2>"+
        "<p>This is the home page in para.</p>");
        fs.createReadStream(__dirname+"/index.html").pipe(response);
    
    } else if (request.url == "/registration") {
        response.writeHead(200,{"Content-type":"text/html"});
        fs.createReadStream(__dirname+"/registration.html").pipe(response);
    } else if (request.url == "/contact") {
        response.writeHead(200,{"Content-type":"text/html"});
        fs.createReadStream(__dirname+"/contact.html").pipe(response);
    } else {
        response.end("Invalid request");
    }
}).listen(3000);
console.log('Server running at http://localhost:3000');
