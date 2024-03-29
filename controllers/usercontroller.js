const database = require("../database")
const utils = require("../utils");


const handle_get_user_by_id = (req, res) => {
  let { id } = req.params;

  let user = database.getUserById(id);
  user.password = undefined;

  if (user) {
    return res.render("profile", { user });
  }

  return res.render("notfound404", { url: req.url });
}


const handle_get_user_by_username = (req, res) => {
  let { username } = req.params;

  let user = database.getUserByUsername(username);
  user.password = undefined;

  if (user) {
    return res.render("profile", { user });
  }

  return res.render("notfound404", { url: req.url });
}


const handle_delete_user_by_id = (req, res) => {
  let { id } = req.params;

  database.deleteUserById(id);

  res.status(200).json({
    message: "User deleted!!",
    success: true
  });
}


const handle_delete_user_by_username = (req, res) => {
  let { username } = req.params;

  database.deleteUserByUsername(username);

  res.status(200).json({
    message: "User deleted!!",
    success: true
  });
}


const handle_change_password = (req, res) => {
  let { username, oldPassword, newPassword } = req.body;

  let user = database.getUserByUsername(username);

  if (!user) {
    return res.status(404).json({
      message: "User not found!!",
      success: false
    });
  }

  if (utils.verifyPassword(oldPassword, user.password)) {
    return res.status(400).json({
      message: "Old password is incorrect!!",
      success: false
    });
  }

  database.changePasswordForUser(username, newPassword);

  return res.status(200).json({
    message: "Password changed!!",
    success: false
  });
}

module.exports = {
  handle_get_user_by_id,
  handle_get_user_by_username,
  handle_delete_user_by_id,
  handle_delete_user_by_username,
  handle_change_password
}
