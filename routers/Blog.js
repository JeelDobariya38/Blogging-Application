const express = require("express");
const router = express.Router();

const controller = require("../controllers/blogcontroller");

router.get("/:id", controller.handle_get_blog_by_id);
router.get("/title/:title", controller.handle_get_blog_by_title);
router.delete("/:id", controller.handle_delete_blog)
router.post("/", controller.handle_create_blog);
router.put("/:id", controller.handle_update_blog)

module.exports = router;