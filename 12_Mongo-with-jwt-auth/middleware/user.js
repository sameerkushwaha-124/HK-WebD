const {User} = require('../db');
const jwt = require("jsonwebtoken");
const jwt_secret = require("../index");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    // Implement admin auth logic
      // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
      try {
        const token = req.headers.authorization; // i am doing this just because we are sending token = "Bearer daldkjalsjkf"  because it is standard
        const words = token.split(" ");
        const jwtToken = words[1];
    
        const decoded = jwt.verify(jwtToken, jwt_secret);
        if (decoded.username) {  // i can also do ->   && deconded.username.type === 'user'
          // agar user sign in ho jaye toh req me ek field add kar do username ka so that no need to further decode again from the token
          req.username = decoded.username;
          next();
        } else {
          res.status(403).json({
            msg: "You are not authenticated",
          });
        }
      } catch (e) {
        res.json({msg : 'Wrong Input'})
      }
}

module.exports = userMiddleware;