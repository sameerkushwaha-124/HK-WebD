const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, User} = require('../db');
const jwt = require('jsonwebtoken');
const {jwt_secret}  = require('../config');

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = red.body.username;
    const password = req.body.password;

    Admin.create({
        username : username,
        password : password
    })

    res.json({
        msg : "Admin Created Successfully."
    })

});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = red.body.username;
    const password = req.body.password;

    const user = await User.findOne({
        username : username,
        password : password
    })

    if(user){
        const token = jwt.sign({username}, jwt_secret) 
        res.json({token : token})                      // i can save it to cookies or header as well.
    }else{
        res.status(411).json({
            msg : "Incorrect username or password."
        })
    }
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic

});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;