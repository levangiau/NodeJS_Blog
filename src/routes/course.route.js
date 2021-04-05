const express = require("express");
const router = express.Router();

const coursecontroller = require("./../app/controllers/Course.controller");

router.get("/:slug", coursecontroller.show);

module.exports = router;
