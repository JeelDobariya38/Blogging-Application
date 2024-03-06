let get_id = require("./id_generator")

const data = []


const getBlogs = (amount) => {
    return Promise.resolve(data.slice(0, amount));
}

const getBlogByTitle = (title) => {
    return Promise.resolve(data.find(blog => blog.title === title));
}

const getBlogById = (id) => {
    return Promise.resolve(data.blogs.find(blog => blog._id === id));
}

const createBlog = (title, content, author) => {
    return new Promise((resolve) => {
        let blog = {
            _id: get_id(),
            title,
            content,
            author,
        };

        data.blogs.push(blog);
        resolve(blog);
    });
}

const updateBlog = (id, updatedBlog) => {
    return new Promise((resolve) => {
        let blog = data.blogs.find(blog => blog._id === id);
        if (blog) {
            blog.title = updatedBlog.title || blog.title;
            blog.content = updatedBlog.content || blog.content;
        }
        resolve(blog);
    });
}

const deleteBlogById = (id) => {
    return new Promise((resolve) => {
        let blog = data.blogs.find(blog => blog._id === id);
        if (blog) {
            data.blogs.splice(data.blogs.indexOf(blog), 1);
        }
        resolve(blog);
    });
}

const deleteBlogByTitle = (title) => {
    return new Promise((resolve) => {
        let blog = data.blogs.find(blog => blog.title === title);
        if (blog) {
            data.blogs.splice(data.blogs.indexOf(blog), 1);
        }
        resolve(blog);
    });
}


module.exports = {
    data,
    getBlogs,
    getBlogById,
    getBlogByTitle,
    createBlog,
    updateBlog,
    deleteBlogById,
    deleteBlogByTitle
};
