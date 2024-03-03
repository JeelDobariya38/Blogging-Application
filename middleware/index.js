const jwt = require("jsonwebtoken");
const database = require("../database");
const loggerservice = require("../logger");


const requireLoggedIn = (req, res, next) => {
  let token = req.cookies?.token;

  if (token) {
    let decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded) {
      req.user = decoded;
      next();
    }
  } else {
    return res.redirect("/login");
  }
}


const logger = (req, res, next) => {
  console.log("Current Database: ", database.data?.users);
  console.log("Request Body: ", req.body);
  loggerservice("Request: " + req.httpVersion + " " + req.method + " \"" + req.url + "\" ");
  next();
}


module.exports = { 
  requireLoggedIn,
  logger,
};
