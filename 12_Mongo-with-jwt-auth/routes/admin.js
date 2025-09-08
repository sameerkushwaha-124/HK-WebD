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

    const user = await Admin.findOne({
        username : username,
        password : password
    })

    if(user){
        const token = jwt.sign({username : username}, jwt_secret) 
        res.json({authorization : token})                      // i can save it to cookies or header as well.
    }else{
        res.status(411).json({
            msg : "Incorrect username or password."
        })
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const createdCourse = await Course.create({
        title : req.body.title,
        description : req.body.description,
        imageLink : req.body.imageLink,
        price : req.body.price
    });   

    res.json({
        msg : "Course created successfully"
    })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find({});
    res.json({courses : courses});
});

module.exports = router;