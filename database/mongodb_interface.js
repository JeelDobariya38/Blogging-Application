const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const User = require("./models/User");
const Blog = require("./models/Blog");

const getUserByUsername = (username) => {
    return User.findOne({ username });
}

const getUserById = (id) => {
    return User.findOne({ id });
}

const getBlogs = (amount) => {
    return Blog.find({}).limit(amount);
}

const getBlogByUsername = (username) => {
    return Blog.find({ username });
}

const getBlogById = (id) => {
    return Blog.find({ id });
}

const createUser = (user) => {
    return User.create( user );
}

const createBlog = (title, content, author) => {
    return Blog.create({ title, content, author });
}

const updateBlog = async (oldtitle, updatedBlog) => {
    const filter = { title: oldtitle };
    await Character.findOneAndUpdate(filter, updatedBlog);
}

const deleteBlog = (title) => {
    return Blog.deleteOne({ title });
}

const deleteUserById = (id) => {
    return User.deleteOne({ id });
}

const deleteUserByUsername = (username) => {
    return User.deleteOne({ username });
}

const changePasswordForUser = (username, newPassword) => {
    return User.findOneAndUpdate({ username }, {password: newPassword});
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
