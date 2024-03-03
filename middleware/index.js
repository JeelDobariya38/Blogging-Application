const jwt = require("jsonwebtoken");

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

module.exports = { 
  requireLoggedIn,
};
