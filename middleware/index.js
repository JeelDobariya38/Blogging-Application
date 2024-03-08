const helper = require("../utils/helper");

const requireLoggedIn = (req, res, next) => {
  let token = req.cookies?.token;

  if (token) {
    let decoded = helper.verifyToken(token);
    if (decoded) {
      req.user = decoded;
      next();
    }
  }

  return res.redirect("/login");
}


module.exports = { 
  requireLoggedIn,
};
