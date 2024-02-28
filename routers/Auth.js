const express = require("express");
const router = express.Router();

const operation = require("../utils/operation");

router.post("/signup", (req, res) => {
  let { fullname, username, password } = req.body;

  if (!fullname || !username || !password) {
    return res.status(400).json({ 
      message: "Please provide all the required fields!!!",
      success: false
    });
  }

  let response= operation.signup(fullname, username, password);
  return res.status(response.status_code).json(response);
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ 
      message: "Please provide all the required fields!!!",
      success: false
    });
  }

  let response= operation.signup(fullname, username, password);
  return res.status(response.status_code).json(response);
});

module.exports = router;
