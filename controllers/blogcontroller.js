const database = require("../database");

const handle_get_blogs = (req, res) => {
  return res.render("index", { blogs: database.getBlogs(10) });
};

const handle_get_blog_by_id = (req, res) => {
  let { id } = req.body;

  const blog = database.getBlogById(id);

  if (blog) {
    return res.render("blog", { blog });
  }

  return res.render("notfound404", { url: req.url });
};

const handle_get_blog_by_title = (req, res) => {
  let { title } = req.body;

  const blog = database.getBlogByTitle(title);

  if (blog) {
    return res.render("blog", { blog });
  }

  return res.render("notfound404", { url: req.url });
};

const handle_create_blog = (req, res) => {
  let { title, content } = req.body;

  let author = req.user;

  const blog = database.createBlog(title, content, author);

  return res.status(200).json({
    message: "blog created successfully",
    blogId: blog.id,
    success: true,
  });
};

const handle_update_blog = (req, res) => {
  let { id } = req.parmas;

  //just ensure that id field is not there
  if (req.body._id) {
    return res.status(400).json({
      message: "you can't updated '_id'",
      success: false,
    });
  }

  database.updateBlog(id, req.body);

  return res.status(200).json({
    message: "blog updated successfully",
    success: true,
  });
};

const handle_delete_blog = (req, res) => {
  let { id } = req.body;

  database.deleteBlog(id);

  return res.status(200).json({
    message: "blog deleted successfully",
    success: true,
  });
};

module.exports = {
  handle_get_blogs,
  handle_get_blog_by_id,
  handle_get_blog_by_title,
  handle_create_blog,
  handle_update_blog,
  handle_delete_blog,
};
