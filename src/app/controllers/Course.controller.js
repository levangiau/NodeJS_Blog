const Course = require("../model/Course.model");
const { MongooseToObject } = require("./../../utils/mongoose");

class CourseController {
  //[GET] /course/create
  create(req, res, next) {
    res.render("course/create");
  };
  //[POST] /course/store
  store(req, res, next) {
    const course = new Course(req.body);
    course
      .save()
      .then(() => res.redirect("/me/stored/courses"))
      .catch((err) => {});
      // res.json(req.body);
    //có 2 cách để thay đổi dữ liệu: c1
  };
  //[GET] /course/:slug
  show(req, res, next) {
    // res.send("Page Course:" +req.params.slug)
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("course/show", {
          course: MongooseToObject(course),
        });
      })
      .catch(next);
  };
  //[GET] /course/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) => {
        res.render("course/edit", {
          course: MongooseToObject(course),
        });
      })
      .catch(next);
  };
  //[PUT] /course/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  };
  //[DELETE] /course/:id
  delete(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  };
  //[PATCH] /course/:id/restore
  patch(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  };
  //[DELETE] /course/:id/force
  destroy(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  };
  //[POST] /course/handle-form-action
  handleFormAction(req,res,next){
    switch (req.body.action) {
      case 'delete':
        /*
        * {$in:[]}: trong mongoose định nghĩa sẵng
        *id:{$in:[]}:có nghĩa là nó sẽ lấy ra những id có giá trị trong mãng đó
        */
          Course.delete({ _id: {$in:req.body.coursesId } }) 
          .then(() => res.redirect("back"))
          .catch(next);
        break;
    
      default:
        res.json({message:"Action invalid!"})
        break;
    }
  }
}
module.exports = new CourseController();
