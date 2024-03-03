data = {
  users: [],
  blogs: [],
}

const getUserByUsername = (username) => {
  return data.users.find(user => user.username === username);
}

const getUserById = (id) => {
  return data.users.find(user => user._id === id);
}

const getBlogs = (amount) => {
  return data.blogs.slice(0, amount);
}

const getBlogByUsername = (username) => {
  return data.blogs.find(blog => blog.username === username);
}

const getBlogById = (id) => {
  return data.blogs.find(blog => blog._id === id);
}

const createUser = (user) => {
  data.users.push(user);
  return user;
}

const createBlog = (title, content, author) => {
  let blog = {
    _id: data.blogs.length + 1,
    title: title,
    content: content,
    username: author,
  }

  data.blogs.push(blog);
  return blog;
}

const updateBlog = (id, newtitle, newcontent) => {
  let blog = data.blogs.find(blog => blog._id === id);
  blog.title = newtitle;
  blog.content = newcontent;
  return blog;
}

const deleteBlog = (id) => {
  let blog = data.blogs.find(blog => blog._id === id);
  data.blogs.splice(data.blogs.indexOf(blog), 1);
  return blog;
}

const deleteUserById = (id) => {
  let user = data.users.find(user => user._id === id);
  data.users.splice(data.users.indexOf(user), 1);
  return user;
}

const deleteUserByUsername = (username) => {
  let user = data.users.find(user => user.username === username);
  data.users.splice(data.users.indexOf(user), 1);
  return user;
}

const changePasswordForUser = (username, newPassword) => {
  let user = data.users.find(user => user.username === username);
  user.password = newPassword;
  return user;
}

let localdatabase = {
  data,
  getUserByUsername,
  getUserById,
  getBlogs,
  getBlogByUsername,
  getBlogById,
  createUser,
  createBlog,
  updateBlog,
  deleteBlog,
  deleteUserById,
  deleteUserByUsername,
  changePasswordForUser,
}

module.exports = localdatabase;
