const { userModel } = require("../utils/database");

describe("Testing UserModel", () => {
  beforeEach(() => {
    userModel.clear();
  });

  test("Create user", () => {
    let user = userModel.createUser("John Doe", "johndoe", "password123");
    let expect_id = userModel.generate_id() - 1;
    expect(user).toEqual({
      id: expect_id,
      fullname: "John Doe",
      username: "johndoe",
      password: "password123",
    });
    expect(userModel.users.length).toEqual(1);
    expect(userModel.users[0]).toEqual(user);
  });

  test("Find user by username", () => {
    let user = userModel.createUser("John Doe", "johndoe", "password123");
    let foundUser = userModel.findUserByUsername("johndoe");
    expect(foundUser).toEqual(user);
  });

  test("Find user by ID", () => {
    let user = userModel.createUser("John Doe", "johndoe", "password123");
    let foundUser = userModel.findUserById(user.id);
    expect(foundUser).toEqual(user);
  });

  test("Create and find user by username", () => {
    let user = userModel.createUser("John Doe", "johndoe", "password");
    let foundUser = userModel.findUserByUsername("johndoe");

    expect(foundUser).toEqual(user);
  });

  test("Remove user by ID", () => {
    let user = userModel.createUser("Jane Doe", "janedoe", "password");
    let removedUser = userModel.removeUserById(user.id);

    expect(removedUser).toEqual(user);
    expect(userModel.findUserById(user.id)).toBeUndefined();
  });

  test("Remove user by username", () => {
    let user = userModel.createUser("Charlie Chaplin", "charlie", "password");

    let removedUser = userModel.removeUserByUsername("charlie");

    expect(removedUser).toEqual({
      id: user.id,
      fullname: "Charlie Chaplin",
      username: "charlie",
      password: "password",
    });
    expect(userModel.findUserById(user.id)).toBeUndefined();
  });

  test("Update user by ID", () => {
    let user = userModel.createUser("Alice Wonderland", "alice", "password");
    let updatedUser = { fullname: "Alice Updated" };

    let result = userModel.updateUserById(user.id, updatedUser);

    expect(result).toEqual({
      id: user.id,
      username: "alice",
      password: "password",
      ...updatedUser,
    });
    expect(userModel.findUserById(user.id)).toEqual(result);
  });

  test("Update user by username", () => {
    let user = userModel.createUser("Bob Builder", "bob", "password");
    let updatedUser = { fullname: "Bob Updated", password: "newpassword" };

    let result = userModel.updateUserByUsername("bob", updatedUser);

    expect(result).toEqual({ id: user.id, username: "bob", ...updatedUser });
    expect(userModel.findUserById(user.id)).toEqual(result);
  });
});
