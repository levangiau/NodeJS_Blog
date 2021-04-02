const express = require("express");
const router = express.Router();

const sitecontroller = require("../app/controllers/Site.controller");

//code đi từ trên xuống nên khi vào nó sẽ vào code đứng trước
router.use("/search", sitecontroller.search);

router.use("/", sitecontroller.index);

module.exports = router;
