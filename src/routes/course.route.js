const express = require("express");
const router = express.Router();

const coursecontroller = require("./../app/controllers/Course.controller");

router.post("/handle-form-trash-action", coursecontroller.handleFormTrashAction);
router.post("/handle-form-action", coursecontroller.handleFormAction);
router.delete("/:id/force", coursecontroller.destroy);
router.patch("/:id/restore", coursecontroller.patch);
router.delete("/:id", coursecontroller.delete);
router.put("/:id", coursecontroller.update);
router.get("/:id/edit", coursecontroller.edit);
router.get("/create", coursecontroller.create);
router.post("/store", coursecontroller.store);
router.get("/:slug", coursecontroller.show);

module.exports = router;
