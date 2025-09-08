// a hospital server...
const express = require("express");
const app = express();




// storing my data (small database)
const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];



app.use(express.json()); // to parse the data(json) which is comming from the frontend




// for get req we can send querry data form the url with the help of browser to backend...
app.get("/", function (req, res) {
  // write logic
  const johnKideny = users[0].kidneys;
  const noOfKidney = johnKideny.length;

  let noOfHealthyKidney = 0;
  for (let i = 0; i < johnKideny.length; i++) {
    if (johnKideny[i].healthy) {
      noOfHealthyKidney++;
    }
  }

  const noOfUnhealthyKidney = noOfKidney - noOfHealthyKidney;

  res.json({
    johnKideny,
    noOfHealthyKidney,
    noOfUnhealthyKidney,
  });
});



// for post req data we have to send data in body from the frontend..(using PostMan)
app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });

  res.json({
    msg: "Done!",
  });
});



// we can update the kidneys
app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({
    msg: "Done",
  });
});




// to delete
app.delete("/", function (req, res) {  
  if(!isThereAtleastOneUnhealthyKidney()){
    res.status(411).json({
        "msg" : "you have no bad kidneys"
    })
  }
  const newKidneys = [];
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy) {
      newKidneys.push({
        healthy: true,
      });
    }
  }

  users[0].kidneys = newKidneys;
  res.json({
    Msg: "Done",
  });
});



function isThereAtleastOneUnhealthyKidney(){
    let atLeastOneUnhealthyKidney = false;
    for(let i = 0; i < users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            atLeastOneUnhealthyKidney = true;
            break;
        }
    }

    return atLeastOneUnhealthyKidney;
}



const port = 3000;
app.listen(port, function () {
  console.log("Server is running on" + " " + port);
});
