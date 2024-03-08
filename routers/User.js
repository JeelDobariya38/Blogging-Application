const express = require("express");
const router = express.Router();

const controller = require("../controllers/usercontroller");


// GET
router.get("/:id", controller.handle_get_user_by_id);
router.get("/username/:username", controller.handle_get_user_by_username);

//PATCH
router.patch("/", controller.handle_change_password);

//DELETE
router.delete("/:id", controller.handle_delete_user_by_id)
router.delete("/username/:username", controller.handle_delete_user_by_username);

module.exports = router;
