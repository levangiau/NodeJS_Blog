const express = require("express");
const router = express.Router();

const newscontroller = require("./../app/controllers/News.controller");

//code đi từ trên xuống nên khi vào nó sẽ vào "/:slug" trước
router.get("/:slug", newscontroller.show);

router.get("/", newscontroller.index);

module.exports = router;
