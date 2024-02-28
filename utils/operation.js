const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const helper = require("./helper");

async function signup(fullname, username, password) {
  /* return a { status_code, success, message, token } */
  if (helper.isUserExists(username)) {
    return {
      status_code: 400,
      message: "User already exists!!!",
      success: false,
    };
  }

  let password_check = helper.isSecurePassword(password);

  if (password_check.secure) {
    let hashedPassword = await bcrypt.hash(
      password,
      parseInt(process.env.SaltInt)
    );
    let user = helper.addUser({
      fullname,
      username,
      password: hashedPassword,
    });

    let token = jwt.sign(
      {
        sub: user.id,
      },
      process.env.JWT_ACCESS_SECRET
    );

    return {
      status_code: 201,
      message: "Signing Successful!!!",
      success: true,
      access_token: token,
    };
  } else {
    return {
      staus_code: 400,
      message: password_check.message,
      success: false,
    };
  }
}

async function login(username, password) {
  /* return a { status_code, success, message, token } */
  let user = helper.getUser(username);

  if (!user) {
    return {
      status_code: 400,
      message: "Please provide all the required fields!!!",
      success: false,
    };
  }

  password = await bcrypt.hash(password, parseInt(process.env.SaltInt));

  if (bcrypt.compare(password, user.password)) {
    let token = jwt.sign(
      {
        sub: user.id,
      },
      process.env.JWT_ACCESS_SECRET
    );

    return {
      status_code: 200,
      message: "User created successfully!!!",
      access_token: token,
      success: true,
    };
  }
}

module.exports = {
  signup,
  login,
};
