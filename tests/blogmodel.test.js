const { blogModel } = require("../utils/database");

describe("Testing BlogModel", () => {
  beforeEach(() => {
    blogModel.clear();
  });

  test("Create and find blog by title", () => {
    let blog = blogModel.createBlog("Sample Blog", "This is a sample blog", 1);
    let foundBlog = blogModel.findBlogByTitle("Sample Blog");

    expect(foundBlog).toEqual(blog);
  });

  test("Remove blog by ID", () => {
    let blog = blogModel.createBlog(
      "Another Blog",
      "This is another sample blog",
      1,
    );
    let removedBlog = blogModel.removeBlogById(blog.id);

    expect(removedBlog).toEqual(blog);
    expect(blogModel.findBlogById(blog.id)).toBeUndefined();
  });

  test("Update blog by ID", () => {
    let blog = blogModel.createBlog(
      "Updated Blog",
      "This blog will be updated",
      1,
    );
    let updatedBlog = { content: "Content Updated" };

    let result = blogModel.updateBlogById(blog.id, updatedBlog);

    expect(result).toEqual({ ...blog, ...updatedBlog });
    expect(blogModel.findBlogById(blog.id)).toEqual(result);
  });

  test("Remove blog by title", () => {
    let blog = blogModel.createBlog(
      "To be Removed",
      "This blog will be removed",
      1,
    );

    let removedBlog = blogModel.removeBlogByTitle("To be Removed");

    expect(removedBlog).toEqual(blog);
    expect(blogModel.findBlogById(blog.id)).toBeUndefined();
  });

  test("Update blog by title", () => {
    let blog = blogModel.createBlog(
      "Old Title",
      "This title will be updated",
      1,
    );
    let updatedBlog = { title: "New Title" };

    let result = blogModel.updateBlogByTilte("Old Title", updatedBlog);

    expect(result).toEqual({
      id: blog.id,
      authorId: 1,
      content: "This title will be updated",
      ...updatedBlog,
    });
    expect(blogModel.findBlogById(blog.id)).toEqual(result);
  });
});
