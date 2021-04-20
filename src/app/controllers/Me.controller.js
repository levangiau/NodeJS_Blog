const Course = require("../model/Course.model");
const {multipleMongooseToObject} = require("./../../utils/mongoose");

class MeController {
    //[GET] /me/storeCourses
    storeCourses(req,res,next){
    Course.find({}).then(course=>res.render('me/storeCourses',{
      course:multipleMongooseToObject(course)
    })).catch(next)
  };
   //[GET] /me/trashCourses
  trashCourses(req,res,next){
    Course.findDeleted({}).then(course=>res.render('me/trashCourses',
    {
      course:multipleMongooseToObject(course)
    }
    )).catch(next)
  };
}
module.exports = new MeController();
