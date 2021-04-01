const express = require("express");
const morgan = require("morgan");
const path = require("path");
const handlebars = require("express-handlebars");
const app = express();
const port = 5000;
//cấu hình file tỉnh && SCSS
app.use(express.static(path.join(__dirname, "public")));
//http loger
app.use(morgan("combined"));
//template energin(default)
// app.engine("handlebars", handlebars());
// app.set("view engine", "handlebars");
//template energin khi đuôi template dài => đuôi template ngắn hơn => đổi đuôi có handlebars sang đuôi muốn đổi
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource/views")); // =>code này có ý nghĩa: tạo path resource/views thành views
console.log(__dirname);
console.log(path.join(__dirname, "resource/views"));
//
app.get("/", (req, res) => {
  res.render("home"); //=> đổ dữ liệu ở thằng home vào trong main.hbs
});
app.get("/news", (req, res) => {
  res.render("news"); //=> đổ dữ liệu ở thằng news.hbs vào trong main.hbs
});

//localhost === "127.0.0.1"
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
