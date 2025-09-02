const express = require('express');
const app = express();

app.use(express.json());

app.get('/health-checkup', function(req, res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = parseInt(req.query.kidneyId); // if we do not parse then it is in string.

    console.log(username);
    console.log(password);
    console.log(kidneyId);

    if (username != 'harkirat' || password != 'pass') {
        return res.json({ "msg": "Something is wrong with username and password" });
    }

    if (kidneyId != 1 && kidneyId != 2) {
        return res.json({ "msg": "Something is wrong with kidneyId" });
    }

    res.json({ "Msg": "Your Kidney is fine." });
});

app.listen(4000);


//-------------------------------------------------------------------------------------------------------------------------------
// but this is not the optimal way to handdle at each and every routes
// so that the concept of middleware arises.


app.get('/health-checkup', function(req, res, next){  // next is function in itself.
    console.log("Hi from req1");
    next();
}, function(req, res){ // we do not need next here.
    console.log('hi from req2');
    res.send("Hi there");
}); // this is how express let you chaing throw the middlewares..



// ------------------------------------------------------------------------------------------------------------------------------
// standard way..

// middleware for user.
function userMiddleware(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;

    if (username != 'harkirat' || password != 'pass') {
        return res.json({ "msg": "Something is wrong with username and password" });
    }
    next();
}

// Middleware for kidney
function kidneyMiddleware(req, res, next){
    const kidneyId = parseInt(req.query.kidneyId); // if we do not parse then it is in string.

    if (kidneyId != 1 && kidneyId != 2) {
        return rres.json({ "msg": "Something is wrong with kidneyId" });
    }
    next();
}


app.get('/health-checkup', userMiddleware, kidneyMiddleware, function(req, res) {
    // do some logic here with kidney
    res.json({ "Msg": "Your Kidney is fine." });
});


app.get('/kidney-checkup', kidneyMiddleware, function(req, res){
    // do some logic here with kidney
    res.json({"msg" : "kidney checkup done."}); // you can not send multipile http res...
})

app.listen(4000);


// -------------------------------------------------------------------------------------------------------------------------

//rate limiting

let numberOfRequests = 0;

function calculateRequest(req, res, next){       // very popular middleware to find the total load on the server.
    numberOfRequests++;
    console.log(numberOfRequests);
    next();
}

app.get("/health-checkup", calculateRequest, function(req, res){

})

app.get('/health-checkup2', calculateRequest, function(req, res){

})

app.listen(4000);




// ------------------------------------------------------------------------------------------------------------------------------
// app.use()  : Syntex for the middleware that every request is comming will pass from this middleware
                // and then reach to each and every route.


numberOfRequests = 0;

function calculateRequest(req, res, next){     // very popular middleware to find the total load on the server.
    numberOfRequests++;
    console.log(numberOfRequests);
    next(); // if we remove request will hunck...
}


app.use(calculateRequest);

app.post("/health-checkup",  function(req, res){
    console.log(req.body);
    res.json({"msg" : "Hi There"})
})


app.listen(4000);