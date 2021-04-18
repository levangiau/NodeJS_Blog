const express = require("express");
const methodOverride = require('method-override');
const morgan = require("morgan");
const path = require("path");
const handlebars = require("express-handlebars");
const db = require("./config/db");
const app = express();
const port = 5000;

//cấu hình file tỉnh && SCSS
app.use(express.static(path.join(__dirname, "public")));

//cấu hình method req lên server
app.use(methodOverride('_method'))

//http loger
// app.use(morgan("combined"));

//template energin(default)
// app.engine("handlebars", handlebars());
// app.set("view engine", "handlebars");

//template energin khi đuôi template dài => đuôi template ngắn hơn => đổi đuôi có handlebars sang đuôi muốn đổi
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    helpers: {
      sum:(a,b)=>a+b,
    }
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, 'resource','views')); // =>code này có ý nghĩa: tạo path resource/views thành views

//

/**
 * (req,res)=>{
 * console.log(res.......)
 * }
 * ---------GET--------
 * khi lấy dữ liệu thì res.query....
 * ---------POST--------
 * khi lấy dữ liệu thì res.body....
 * nhưng ở server gửi về client nó không hiểu được body
 * nên phải tích hợp phương thức để server trả về client qua body
 * => express: version >4.16 có tích hợp sẳng phương thức tích hợp với body.
 * => express: version < 4.16 chưa tích hợp phương thức với body nên cần phải tìm phương thức tích hợp body-parser,..
 */

// phương thức tích hợp body:
app.use(
  express.urlencoded({
    extended: true,
  })
); // lấy dữ liệu từ form lên
app.use(express.json()); // lấy dữ liệu từ javascript lên

//-----------------------------------------------Routing khi chưa có mô hình MVC-----------------------------------

//Routing
// app.get("/", (req, res) => {
//   res.render("home"); //=> đổ dữ liệu ở thằng home vào trong main.hbs
// });

// app.get("/news", (req, res) => {
//   res.render("news"); //=> đổ dữ liệu ở thằng news.hbs vào trong main.hbs
// });

// app.get("/search", (req, res) => {
//   console.log("get", req.query);
//   res.render("search"); //=> đổ dữ liệu ở thằng search.hbs vào trong main.hbs
// });

// app.post("/search", (req, res) => {
//   console.log("post", req.body);
//   res.send("");
// });

//-----------------------------------------------Routing theo mô hình MVC-----------------------------------

const route = require("./routes");

route(app);

//connect db
db.connect();

//localhost === "127.0.0.1"
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
