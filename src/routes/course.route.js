const express = require("express");
const router = express.Router();

const coursecontroller = require("./../app/controllers/Course.controller");

router.put("/:id", coursecontroller.update);
router.get("/:id/edit", coursecontroller.edit);
router.get("/create", coursecontroller.create);
router.post("/store", coursecontroller.store);
router.get("/:slug", coursecontroller.show);

module.exports = router;
