const express = require("express");
const router = express.Router();

const controller = require("../controllers/blogcontroller");


// GET
router.get("/", controller.handle_get_blogs)
router.get("/:id", controller.handle_get_blog_by_id);
router.get("/title/:title", controller.handle_get_blog_by_title);

// POST
router.post("/", controller.handle_create_blog);

// PATCH
router.put("/:id", controller.handle_update_blog);

// DELETE
router.delete("/:id", controller.handle_delete_blog);


module.exports = router;