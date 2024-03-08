const { getUserByUsername, createUser } = require("../database");
const utils = require("../utils");

const handle_login = async (req, res) => {
  let { username, password } = req.body;

  // check for require fileds
  if ((!username, !password)) {
    return res.status(400).json({
      message: "Please provide require fields!!",
      success: false,
    });
  }

  let user = getUserByUsername(username);

  // check for users existance
  if (!user) {
    return res.status(404).json({
      message: "Invalid Username!!",
      success: false,
    });
  }

  // check for password match
  let result = utils.verifyPassword(password, user.password);

  if (!result) {
    return res.status(400).json({
      message: "Invalid Password!!",
      success: false,
    });
  }

  // authentication part
  res.cookie("access_token", utils.generateToken(user._id, user.username), {
    expiresIn: Date.now() + 36000000,
    httpOnly: true,
  });
};

const handle_logout = async (req, res) => {
  res.clearCookie("access_token");
  res.redirect("/");
};

const handle_signin = async (req, res) => {
  let { fullname, username, password } = req.body;

  // check for require fileds
  if ((!fullname, !username, !password)) {
    return res.status(400).json({
      message: "Please provide require fields!!",
      success: false,
    });
  }

  // check for username already existance
  if (getUserByUsername(username)) {
    return res.status(400).json({
      message: "Username already exists!!",
      success: false,
    });
  }

  // user creation and insertion into database
  let hashedPassword = utils.hashPassword(password);

  user = createUser(fullname, username, hashedPassword);

  // authentication part
  res.cookie("access_token", utils.generateToken(user._id, user.username), {
    expiresIn: Date.now() + 36000000,
    httpOnly: true,
  });
};

module.exports = {
  handle_login,
  handle_signin,
  handle_logout,
};
