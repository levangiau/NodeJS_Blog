const Course = require("../model/Course.model");
const {multipleMongooseToObject} = require("./../../utils/mongoose");

class SiteController {
  //[GET] /
  index(req, res,next) {
    // Call api truyền lại theo dạng callback

    // Course.find({}, function (err, courses) {
    //   if (!err) {
    //     res.json(courses);
    //   } else {
    //     next(err);
    //     // res.status(400).json({ error: "error" });
    //   }
    // });

    //Call api truyền theo dạng Promies

    // Course.find({}).then(course=>{
    //   course = course.map(course=>course.toObject());
    //      res.render("home",{ course})
    //     // res.json(course)

    // }).catch(err => next(err))

    //dạng sử dụng hàm ở ngoài truyền vào cho đỡ lập code
   
    Course.find({}).then(course=>{
    
         res.render("home",{ 
           course:multipleMongooseToObject(course)
          })
        // res.json(course)

    }).catch(err => next(err))

  }
  //[GET] /search
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController(); // tạo ra đối tượng của SiteController và export ra
