const express = require("express");
const router = express.Router();

const newscontroller = require("./../app/controllers/News.controller");

//code đi từ trên xuống nên khi vào nó sẽ vào "/:slug" trước
router.use("/:slug", newscontroller.show);

router.use("/", newscontroller.index);

module.exports = router;
