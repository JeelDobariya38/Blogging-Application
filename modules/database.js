class BaseModel {

  constructor() {
    this.next_id = 0;
    this.users = [];
    this.blogs = [];
  }

  generate_id() {
    return this.next_id++;
  }

  init(userdata, blogdata) {
    this.users = userdata;
    this.blogs = blogdata;
  }

  clear() {
    this.next_id = 0;
    this.users = [];
    this.blogs = [];
  }
}


class UserModel extends BaseModel {
  constructor() {
    super();
  }
  
  CreateUser(fullname, username, password) {
    let user = {
      id: this.generate_id(),
      fullname,
      username,
      password,
    }
    this.users.push(user);
    return user;
  }
  
  findUserByUsername(username) {
    return this.users.find(user => user.username === username);
  }
  
  findUserById(id) {
    return this.users.find(user => user.id === id);
  }
  
  removeUserById(id) {
    let removedUser = this.users.find(user => user.id === id);
    this.users = this.users.filter(user => user.id !== id);
    return removedUser;
  }
  
  removeUserByUsername(username) {
    let removedUser = this.users.find(user => user.username === username);
    this.users = this.users.filter(user => user.username !== username);
    return removedUser;
  }
  
  updateUserById(id, updatedUser) {
    this.users = this.users.map(user => (user.id === id ? { ...user, ...updatedUser } : user));
    return this.users.find(user => user.id === id);
  }
  
  updateUserByUsername(username, updatedUser) {
    this.users = this.users.map(user => (user.username === username ? { ...user, ...updatedUser } : user));
    return this.users.find(user => user.username === username);
  }
}


class BlogModel extends BaseModel {
  constructor() {
    super();
  }
  
  CreateBlog(title, content, authorId) {
    let blog = {
      id: this.generate_id(),
      title,
      content,
      authorId,
    }
    this.blogs.push(blog);
    return blog;
  }
  
  findBlogById(id) {
    return this.blogs.find(blog => blog.id === id);
  }

  findBlogByTitle(title) {
    return this.blogs.find(blog => blog.title === title);
  }
  
  removeBlogById(id) {
    let removedBlog = this.blogs.find(blog => blog.id === id);
    this.blogs = this.blogs.filter(blog => blog.id !== id);
    return removedBlog;
  }

  removeBlogByTitle(title) {
    let removedBlog = this.blogs.find(blog => blog.title === title);
    this.blogs = this.blogs.filter(blog => blog.title !== title);
    return removedBlog;
  }
  
  updateBlogById(id, updatedBlog) {
    this.blogs = this.blogs.map(blog => (blog.id === id ? { ...blog, ...updatedBlog } : blog));
    return this.blogs.find(blog => blog.id === id);
  }

  updateBlogByTilte(title, updatedBlog) {
    this.blogs = this.blogs.map(blog => (blog.title === title ? { ...blog, ...updatedBlog } : blog));
    let blog_title = updatedBlog.title ? updatedBlog.title : title;
    return this.blogs.find(blog => blog.title === blog_title);
  }
}


local_db = {
  baseModel: new BaseModel(),
  userModel: new UserModel(),
  blogModel: new BlogModel(),
}


module.exports = local_db;
