const mongoose = require('mongoose');


const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    likes: [{
        type: mongoose.Types.ObjectId,
        ref: "User",
    }],
    comments: [{
        type: mongoose.Types.ObjectId,
        ref: "Comment",
    }]
});


module.exports = mongoose.model('Blog', blogSchema);
