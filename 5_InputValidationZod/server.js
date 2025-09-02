/**
 
const express = require('express');
const app = express();

app.use(express.json());

app.post('/health-check', function(req, res){
    // kidneys = [1, 2];
    // user can send any kind of the data so that
    // server may be crash so that we need to handle the data
    const kidneys = req.body.kidneys;

    // if(!kidneys){ // lots of if else if condition needed to validate
    //     res.json({ "msg" : "wrong input"}); 
    // }


    const kidneyLength = kidneys.length;

    res.send("you have "+ kidneyLength + " kidneys");
})


// global catches : to handle errors is data is not compatable to the data we want
app.use(function(err, req, res, next){
    res.json({
        'msg' : "Somthing is up with our server"
    })
})


app.listen(4000);

*/

// ---------------------------------------------------------------------------------------
// for input validation we can use zod
const express = require('express');
const app = express();
const  z  = require('zod');

// Schema expects "kidneys" as an array of numbers
// const schema = z.array(z.number());

// or for condition at a time....
// if you have to do validation for email:
 const schema = z.object({
    email: z.string(),
    password: z.string(),
    country: z.literal("IN").or(z.literal("US")),
    kidneys: z.array(z.number())
 });



app.use(express.json());

app.post('/health-check', (req, res) => {
    const data = req.body;
    // const result = schema.safeParse(data.kidneys); // ye nahi kar sakte kynki parse pura body karna padega becaue schema me sab hain
    const result = schema.safeParse(data); // what if user is not sending anything...

    if (!result.success) {
        return res.status(400).json({
            "msg" : "input is invalid"
        });
    }

    res.json({
        message: "Validation successful!",
        data: result
    });
});

app.listen(4000, () => {
    console.log("Server running on http://localhost:4000");
});



// --------------------------------------------
// if this is an array of number with atleast 1 input,
// retrun true, else return false