const express = require("express");
const router = express.Router();

const mecontroller = require("./../app/controllers/Me.controller");

router.get("/trash/courses", mecontroller.trashCourses);
router.get("/stored/courses", mecontroller.storeCourses);


module.exports = router;
