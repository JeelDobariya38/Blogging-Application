const express = require("express");
const router = express.Router();

const controller = require("../controllers/usercontroller");

router.get("/:id", controller.handle_get_user_by_id);
router.get("/username/:username", controller.handle_get_user_by_username);
router.delete("/delete/:id", controller.handle_delete_user_by_id)
router.delete("/username/:username", controller.handle_delete_user_by_username);
router.post("/", controller.handle_change_password);

module.exports = router;
