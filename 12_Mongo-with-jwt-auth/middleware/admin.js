const { Admin } = require("../db");
const jwt = require("jsonwebtoken");
const jwt_secret = require("../index");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  try {
    const token = req.headers.authorization; // i am doing this just because we are sending token = "Bearer daldkjalsjkf"  because it is standard
    const words = token.split(" ");
    const jwtToken = words[1];

    const decoded = jwt.verify(jwtToken, jwt_secret);
    if (decoded.username) {  // i can also do ->   && deconded.username.type === 'admin'
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

module.exports = adminMiddleware;
