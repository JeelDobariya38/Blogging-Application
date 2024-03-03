const database = require("../database")

const handle_get_blogs = (req, res) => {
  let { amount } = req.body

  const blogs = database.getBlogs(amount);

  return res.status(200).json({
    message: "Blogs fetched successfully",
    blogs: blogs,
    success: true,
  });
}


const handle_get_blog_by_id = (req, res) => {
  let { id } = req.body

  const blog = database.getBlogById(id);

  return res.status(200).json({
    message: "Blog fetched successfully",
    blog: blog,
    success: true,
  });
}


const handle_get_blog_by_username = (req, res) => {
  let { username } = req.body

  const blog = database.getBlogByUsername(username);

  return res.status(200).json({
    message: "Blog fetched successfully",
    blog: blog,
    success: true,
  });
};


const handle_create_blog = (req, res) => {
  let { title, content } = req.body;

  let user = req.user;

  const blog = database.createBlog(title, content, author);

  return res.status(200).json({
    message: "blog created successfully",
    blogId: blog.id,
    success: true
  });
}


const handle_update_blog = (req, res) => {
  let { id } = req.parmas;
  let { newtitle, newcontent } = req.body;

  const blog = database.updateBlog(id, newtitle, newcontent);

  return res.status(200).json({
    message: "blog updated successfully",
    blog: blog,
    success: true
  });
}


const handle_delete_blog = (req, res) => {
  let { id } = req.body;

  const blog = database.deleteBlog(id);

  return res.status(200).json({
    message: "blog deleted successfully",
    blog: blog,
    success: true
  });
}

module.exports = {
  handle_get_blogs,
  handle_get_blog_by_id,
  handle_create_blog,
  handle_update_blog,
  handle_delete_blog,
}
