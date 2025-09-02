const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course} = require("../db");

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  Admin.create({
    username: username,
    password: password,
  })
  .then(function () {
    res.json({
      msg: "Admin Created Successfully.",
    });
  })
  .catch(function(){
    res.status(400).json({msg : "Internal Server Error : Admin Not Created"})
  })  
});

router.post("/courses",   adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title =  req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageLink = req.body.imageLink;

  const newCourse = await Course.create({
    title : title,
    description : description,
    price : price,
    imageLink : imageLink
  });

  const newCourseId = newCourse._id;
  
  res.json({
    msg : "Course Created Successfully",
    courseId : newCourseId 
  })
});

module.exports = router;
