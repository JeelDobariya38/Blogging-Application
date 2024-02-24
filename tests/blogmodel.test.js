const { blogModel } = require('../modules/database');


describe('Testing BlogModel', () => {
  beforeEach(() => {
    blogModel.clear();
  });

  test('Create and find blog by title', () => {
    const blog = blogModel.CreateBlog('Sample Blog', 'This is a sample blog', 1);
    const foundBlog = blogModel.findBlogByTitle('Sample Blog');
    
    expect(foundBlog).toEqual(blog);
  });

  test('Remove blog by ID', () => {
    const blog = blogModel.CreateBlog('Another Blog', 'This is another sample blog', 1);
    const removedBlog = blogModel.removeBlogById(blog.id);
    
    expect(removedBlog).toEqual(blog);
    expect(blogModel.findBlogById(blog.id)).toBeUndefined();
  });

  test('Update blog by ID', () => {
    const blog = blogModel.CreateBlog('Updated Blog', 'This blog will be updated', 1);
    const updatedBlog = { content: 'Content Updated' };

    const result = blogModel.updateBlogById(blog.id, updatedBlog);

    expect(result).toEqual({ ...blog, ...updatedBlog });
    expect(blogModel.findBlogById(blog.id)).toEqual(result);
  });

  test('Remove blog by title', () => {
    const blog = blogModel.CreateBlog('To be Removed', 'This blog will be removed', 1);

    const removedBlog = blogModel.removeBlogByTitle('To be Removed');

    expect(removedBlog).toEqual(blog);
    expect(blogModel.findBlogById(blog.id)).toBeUndefined();
  });

  test('Update blog by title', () => {
    const blog = blogModel.CreateBlog('Old Title', 'This title will be updated', 1);
    const updatedBlog = { title: 'New Title' };

    const result = blogModel.updateBlogByTilte('Old Title', updatedBlog);

    expect(result).toEqual({ id: blog.id, authorId: 1, content: 'This title will be updated', ...updatedBlog });
    expect(blogModel.findBlogById(blog.id)).toEqual(result);
  });
});
