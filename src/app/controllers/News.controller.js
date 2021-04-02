class NewsController {
  //[GET] /news
  index(req, res) {
    res.render("news");
  }
  //[GET] /news/:slug
  show(req, res) {
    res.send("News Detail");
  }
}
module.exports = new NewsController(); // tạo ra đối tượng của NewsController và export ra
