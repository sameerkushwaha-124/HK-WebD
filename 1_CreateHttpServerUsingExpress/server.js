// rest api, http 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// middleware
app.use(bodyParser.json());

// route
app.get('/', function(req, res){
    res.send("hello World. <b>First Code...<b/>");
    // nodejs send string but browser thing it is look like html so that browser render it as html
})

app.get('/route-handler', function(req, res){
    //  headers, body, querry parameters
    // do some logic
    res.json({
        name : "Sameer",
        age:"21"
    })
})

app.post("/conversations", function(req, res){
    console.log(req.headers);  
    console.log(req.body); // why undefined ?  use body parser
    res.send({
        msg: "2 + 2 = 4"
    })
})

const port = 3000;
app.listen(port, function(){
    console.log('Server is running on ' + port);
});


// creat a simple http server from scratch in c
// create a todo application where u store data in file.
// create a rust/go/java http server 