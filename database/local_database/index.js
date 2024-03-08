const user = require("./user");
const blog = require("./blog");

database = {
  users: user.data,
  blogs: blog.data,
};

module.exports = {
  database,
  ...blog,
  ...user,
};
