const { baseModel } = require("../modules/database");

describe("Testing BaseModel", () => {
  beforeEach(() => {
    baseModel.clear();
  });

  test("Generate unique IDs", () => {
    let id1, id2, id3;

    for (let i = 0; i < 20; i++) {
      id1 = baseModel.generate_id();
      id2 = baseModel.generate_id();
      id3 = baseModel.generate_id();

      expect(id1).toBeGreaterThan(-1);
      expect(id2).toBeGreaterThan(-1);
      expect(id3).toBeGreaterThan(-1);

      expect(id1).not.toEqual(id2);
      expect(id2).not.toEqual(id3);
      expect(id1).not.toEqual(id3);
    }
  });

  test("Initialize data", () => {
    let userData = [
      { id: 1, name: "User1" },
      { id: 2, name: "User2" },
      { id: 3, name: "User3" },
    ];
    let blogData = [
      { id: 1, title: "Blog1", content: "Content1" },
      { id: 2, title: "Blog2", content: "Content2" },
    ];

    baseModel.init(userData, blogData);

    expect(baseModel.users).toEqual(userData);
    expect(baseModel.blogs).toEqual(blogData);
  });

  test("Clear data", () => {
    let userData = [
      { id: 1, name: "User1", username: "user1" },
      { id: 2, name: "User2", username: "user2" },
      { id: 3, name: "User3", username: "user3" },
    ];
    let blogData = [
      { id: 1, title: "Blog1", content: "Content1" },
      { id: 2, title: "Blog2", content: "Content2" },
    ];

    baseModel.users = userData;
    baseModel.blogs = blogData;

    baseModel.clear();

    expect(baseModel.users).toHaveLength(0);
    expect(baseModel.blogs).toHaveLength(0);
  });
});
