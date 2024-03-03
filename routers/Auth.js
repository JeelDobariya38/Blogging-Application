const express = require("express");
const router = express.Router();

const controller = require("../controllers/authenticationcontroller");

router.post("/login", controller.handle_login);
router.post("/signin", controller.handle_signin);
router.post("/logout", controller.handle_logout);

module.exports = router;
