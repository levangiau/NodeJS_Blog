const newsRouter = require("./news.route");
const siteRouter = require("./site.route");
const courseRouter = require("./course.route");

function route(app) {
  //****/
  //   app.get("/news", (req, res) => {
  //     res.render("news");
  //   });
  app.use("/cources", courseRouter);
  app.use("/news", newsRouter);
  //****/

  //****/
  //   app.get("/search", (req, res) => {
  //     console.log("get", req.query);
  //     res.render("search");
  //   });

  //   app.get("/", (req, res) => {
  //     res.render("home");
  //   });
  app.use("/", siteRouter);
  //****/

  //   app.post("/search", (req, res) => {
  //     console.log("post", req.body);
  //     res.send("");
  //   });
}

module.exports = route;
