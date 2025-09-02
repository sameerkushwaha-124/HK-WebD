const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course} = require('../db');

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    // here i am using async await
    const newUser = await User.create({
        username : username,
        password : password
    })

    res.json({
        msg : "User Created Successfully"
    })
    
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});

    res.json({courses : response});
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    User.updateOne({
        username : username
        }, 

        { 
            "$push" :{
            purchasedCourses: courseId
        }
    })

    res.json({msg : "Purchase Complete."})
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username : req.headers.username,
    });

    console.log(user.purchasedCourses);//this is how you can print the all coursed That has been purchases
    const courses = await Course.find({
        _id:{
            "$in" : user.purchasedCourses
        }
    });

    res.json({courses : courses})

});

module.exports = router
