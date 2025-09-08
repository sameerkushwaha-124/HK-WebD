const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User} = require("../db/index");
const jwt  = require("jsonwebtoken");
const {jwt_secret} = require('../config/config');

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const {username, password} = req.body;

    User.create({
        username : username,
        password : password
    }).then((user) => {
        res.json({message : "User created successfully", user : user})
    }).catch((err) => {
        res.status(500).json({message : "Error in creating user", error : err})
    })
});

router.post('/signin',async (req, res) => {
    // Implement admin signup logic
    const {username, password} = req.body;
    const user = await User.findOne({username : username, password});

    if(user){
        const token = jwt.sign({username : username}, jwt_secret);
        res.json({
            authorization : token,
            msg : "User signed in."
        })
    }

    res.status(411).json({
        msg : "Incorrect Input."
    })
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const username = req.username;
    
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const username = req.username;
    username.purchasedCourses.push(req.params.courseId);
    username.save();

    res.json({
        msg : "Course purchased successfully"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.username;
    const coursesDetails = await username.purchasedCourses.populate('purchasedCourses');

    res.json({courses : coursesDetails});
    // here popluate is used to fetch the course details from the course ids stored in purchasedCourses array.
    // without populate it will return only the course ids.
});

module.exports = router