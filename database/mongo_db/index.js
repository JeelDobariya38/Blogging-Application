const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);


const user = require("./user");
const blog = require("./blog");


module.exports = {
    ...blog,
    ...user,
};
