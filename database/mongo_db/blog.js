const Blog = require("./models/Blog");
const user = require("./user")


const getBlogById = (id) => {
    return new Promise((resolve, reject) => {
        Blog.findOne({ _id: id }).populate("author")
            .then((blog) => {
                blog.author.password = undefined;
                resolve(blog);
            })
            .catch((error) => {
                reject(error);
            });
    });
};


const getBlogByTitle = (title) => {
    return new Promise((resolve, reject) => {
        Blog.findOne({ title }).populate("author")
            .then((blog) => {
                blog.author.password = undefined;
                resolve(blog);
            })
            .catch((error) => {
                reject(error);
            });
    });
};


const createBlog = (title, content, username) => {
    return new Promise((resolve, reject) => {
        user.getUserByUsername(username).then((author) => {
            Blog.create({ title, content, author })
                .then((blog) => {
                    resolve(blog);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    });
};


const updateBlog = (title, updatedBlog) => {
    return new Promise((resolve, reject) => {
        Blog.updateOne({ title }, updatedBlog)
            .then((result) => {
                resolve(result);
            })
            .catch((error) => {
                reject(error);
            });
    });
};


const deleteBlogById = (id) => {
    return new Promise((resolve, reject) => {
        Blog.deleteOne({ _id: id })
            .then((result) => {
                resolve(result);
            })
            .catch((error) => {
                reject(error);
            });
    });
};


const deleteBlogByTitle = (title) => {
    return new Promise((resolve, reject) => {
       Blog.deleteOne({ title })
            .then((result) => {
                resolve(result);
            })
            .catch((error) => {
                reject(error);
            });
    });
};


module.exports = {
    getBlogById,
    getBlogByTitle,
    createBlog,
    updateBlog,
    deleteBlogById,
    deleteBlogByTitle
};
