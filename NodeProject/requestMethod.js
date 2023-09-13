const request = require('request');
var url = "https://jsonplaceholder.typicode.com/users/5"
request(url,(err,res,body)=>{
    if(err) console.log(err);
    console.log(res.statusCode);
    console.log(body);
})
const axios = require('axios')

// Make request
axios.get('https://jsonplaceholder.typicode.com/posts/1')

// Show response data
.then(res => console.log(res.data))
.catch(err => console.log(err))