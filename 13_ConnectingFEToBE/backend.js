const express = require('express');
const app = express();
const cors = require("cors")

app.use(express.json());
app.use(cors());


app.get('/output', function(req, res){
    const a = req.query.a;
    const b = req.query.b;
    const sum = parseInt(a) + parseInt(b);
    res.send(sum.toString());
})

app.listen(5000, function(){
    console.log("Server is running on the port 5000");
})