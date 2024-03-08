const utils = require("../utils");

const requireLoggedIn = (req, res, next) => {
  let token = req.cookies?.token;

  if (token) {
    let decoded = utils.verifyToken(token);
    if (decoded) {
      req.user = decoded;
      next();
    }
  }

  return res.redirect("/login");
};

module.exports = {
  requireLoggedIn,
};
