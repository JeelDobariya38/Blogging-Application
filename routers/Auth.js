const express = require("express");
const router = express.Router();

const controller = require("../controllers/authenticationcontroller");

// GET
router.get("/login", (req, res) => {
    res.render("login");
});

router.get("/signin", (req, res) => {
    res.render("sigin");
});


//POST
router.post("/login", controller.handle_login);
router.post("/signin", controller.handle_signin);
router.post("/logout", controller.handle_logout);

module.exports = router;
