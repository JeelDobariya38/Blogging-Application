const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { getUserByUsername, createUser } = require("../database");

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
  bcrypt.compare(password, user.password, (err, result) => {
    if (!result) {
      return res.status(400).json({
        message: "Invalid Password!!",
        success: false,
      });
    }

    // authentication part
    let token = jwt.sign(
      {
        username: user.username,
        id: user._id,
      },
      process.env.JWT_ACCESS_SECRET,
      {
        expiresIn: "3h",
      }
    );

    res.cookie("access_token", token, {
      expiresIn: Date.now() + 36000000,
      httpOnly: true,
    });

    // res.status(200).json({
    //   message: "Login Successful",
    //   success: true,
    //   token: token,
    // });

    res.redirect("/");
  });
};


const handle_logout = async (req, res) => {
  res.clearCookie("access_token");
  res.redirect("/");
}


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
  let hashedPassword = await bcrypt.hash(
    password,
    Number(process.env.SALT_ROUNDS)
  );

  let user = {
    fullname,
    username,
    password: hashedPassword,
  };

  user = createUser(user);

  // authentication part
  let token = jwt.sign(
    {
      username: user.username,
      id: user._id,
    },
    process.env.JWT_ACCESS_SECRET,
    {
      expiresIn: "3h",
    }
  );

  res.cookie("access_token", token, {
    expiresIn: Date.now() + 36000000,
    httpOnly: true,
  });

  // res.status(200).json({
  //   message: "Signin Successful",
  //   success: true,
  //   token: token,
  //   user_id: user._id,
  // });

  res.redirect("/");
};

module.exports = {
  handle_login,
  handle_signin,
  handle_logout
};
