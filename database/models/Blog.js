const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    content: String,
    author: {type: mongoose.Types.ObjectId, ref: "User"}
});

module.exports = mongoose.model('Blog', blogSchema);
