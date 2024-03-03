const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const User = require("./models/User");
const Blog = require("./models/Blog");


const getUserByUsername = async (username) => {
    let user = await User.findOne({ username });
    return user;
}

const getUserById = async (id) => {
    let user = await User.findOne({ id });
    return user;
}

const getBlogs = async (amount) => {
    let blogs = await Blog.find({}).limit(amount);
    return blogs;
}

const getBlogByUsername = async (username) => {
    let blog = await Blog.find({ username });
    return blog;
}

const getBlogById = async (id) => {
    let blog = await Blog.findOne({ id });
    return blog;
}

const createUser = async (user) => {
    let newUser = await User.create(user);
    return newUser;
}

const createBlog = async (title, content, username) => {
    let author = getUserByUsername(username);;
    let blog = await Blog.create({ title, content, author._id });
    return blog;
}

const updateBlog = async (oldtitle, updatedBlog) => {
    const filter = { title: oldtitle };
    let blog = await Character.findOneAndUpdate(filter, updatedBlog);
    return blog;
}

const deleteBlog = async (title) => {
    let blog = await Blog.deleteOne({ title });
    return blog;
}

const deleteUserById = async (id) => {
    let user = await User.deleteOne({ id });
    return user;
}

const deleteUserByUsername = async (username) => {
    let user = await User.deleteOne({ username });
    return user;
}

const changePasswordForUser = async (username, newPassword) => {
    let user = await User.findOneAndUpdate({ username }, {password: newPassword});
    return user;
}


let mongoosedatabase = {
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

module.exports = mongoosedatabase;
