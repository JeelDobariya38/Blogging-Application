const express = require("express");
const router = express.Router();

const controller = require("../controllers/authcontroller");

router.post("/login", controller.handle_login);
router.post("/signin", constroller.handle_signin);

module.exports = router;
