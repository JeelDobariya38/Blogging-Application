const User = require("./models/User");

const getUserById = (id) => {
  return new Promise((resolve, reject) => {
    User.findOne({ _id: id })
      .then((user) => {
        resolve(user);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getUserByUsername = (username) => {
  return new Promise((resolve, reject) => {
    User.findOne({ username })
      .then((user) => {
        resolve(user);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const createUser = (fullname, username, password) => {
  return new Promise((resolve, reject) => {
    User.create({ fullname, username, password })
      .then((newUser) => {
        resolve(newUser);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const changeUserPassword = (username, newPassword) => {
  return new Promise((resolve, reject) => {
    User.updateOne({ username }, { password: newPassword })
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const deleteUserById = (id) => {
  return new Promise((resolve, reject) => {
    User.deleteOne({ _id: id })
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const deleteUserByUsername = (username) => {
  return new Promise((resolve, reject) => {
    User.deleteOne({ username })
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports = {
  getUserById,
  getUserByUsername,
  createUser,
  changeUserPassword,
  deleteUserById,
  deleteUserByUsername,
};
