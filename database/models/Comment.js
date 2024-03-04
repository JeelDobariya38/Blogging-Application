const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({
    author: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    content: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Comment', commentSchema);
