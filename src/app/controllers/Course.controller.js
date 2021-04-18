const Course = require("../model/Course.model");
const {MongooseToObject} = require("./../../utils/mongoose");

class CourseController {
  //[GET] /course/create
  create(req,res,next){
    res.render('course/create');
  }
  //[POST] /course/store
  store(req,res,next){
    // res.json(req.body);
    //có 2 cách để thay đổi dữ liệu: c1
    
    const course = new Course(req.body);
    course.save().then(()=> res.redirect('/')).catch(err=>{

    });
    
  }
  //[GET] /course/:slug
  show(req, res,next) {
    // res.send("Page Course:" +req.params.slug)
    Course.findOne({slug: req.params.slug}).then(course=>{

      res.render('course/show',{
        course:MongooseToObject(course)
      });
    }).catch(next);
  }
  //[GET] /course/:id/edit
  edit(req, res,next){
    Course.findById(req.params.id).then(course=>{
      res.render('course/edit',{
        course:MongooseToObject(course)
      });
    }).catch(next)
  }
  //[PUT] /course/:id
  update(req,res,next){
    Course.updateOne({_id:req.params.id},req.body)
    .then(()=>res.redirect('/me/stored/courses'))
    .catch(next)
    
  }
}
module.exports = new CourseController();
