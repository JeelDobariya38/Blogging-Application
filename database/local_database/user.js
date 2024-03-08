let get_id = require("./id_generator");

const data = [];

const getUserByUsername = (username) => {
  return Promise.resolve(data.find((user) => user.username === username));
};

const getUserById = (id) => {
  return Promise.resolve(data.find((user) => user._id === id));
};

const createUser = (fullname, username, password) => {
  return new Promise((resolve) => {
    let user = { _id: get_id(), fullname, username, password };
    data.users.push(user);
    resolve(user);
  });
};

const deleteUserById = (id) => {
  return new Promise((resolve) => {
    let user = data.users.find((user) => user._id === id);
    if (user) {
      data.users.splice(data.users.indexOf(user), 1);
    }
    resolve(user);
  });
};

const deleteUserByUsername = (username) => {
  return new Promise((resolve) => {
    let user = data.users.find((user) => user.username === username);
    if (user) {
      data.users.splice(data.users.indexOf(user), 1);
    }
    resolve(user);
  });
};

const changeUserPassword = (username, newPassword) => {
  return new Promise((resolve) => {
    let user = data.users.find((user) => user.username === username);
    if (user) {
      user.password = newPassword;
    }
    resolve(user);
  });
};

module.exports = {
  data,
  getUserById,
  getUserByUsername,
  createUser,
  changeUserPassword,
  deleteUserById,
  deleteUserByUsername,
};
