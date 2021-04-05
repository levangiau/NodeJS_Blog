const Course = require("../model/Course.model");
const {MongooseToObject} = require("./../../utils/mongoose");

class CourseController {
  //[GET] /course/:slug
  show(req, res,next) {
    // res.send("Page Course:" +req.params.slug)
    Course.findOne({slug: req.params.slug}).then(course=>{
      res.render('course/show',{
        course:MongooseToObject(course)
      });
    }).catch(next);
  }
}
module.exports = new CourseController();
