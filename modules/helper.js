const db = require("./database");

function isUserExists(username) {
  /* return a bool */
  if (db.userModel.findUserByUsername(username)) {
    return true;
  } else {
    return false;
  }
}

function isSecurePassword(password) {
  /* return a {secure, message} */
  if (password.length < 8) {
    return {
      secure: false,
      message: "Password must be at least 8 characters long!!",
    };
  }
  else {
    return {
      secure: true,
      message: "Password is secure!!",
    };
  }
}

function addUser(user) {
  /* return a success, message, data */
  let user_created = db.userModel.createUser(
      user.fullname,
      user.username,
      user.password
    );
  user_created.password = undefined;
  return (
    success = true,
    message: "User created successfully!!!",
    data: user_created
  );
}

module.exports = {
  addUser,
  isUserExists,
  isSecurePassword,
};
