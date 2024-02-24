const { userModel } = require("../modules/database");

describe('Testing UserModel', () => {
  beforeEach(() => {
    userModel.clear();
  });

  test('Create user', () => {
    const user = userModel.CreateUser('John Doe', 'johndoe', 'password123');
    let expect_id = userModel.generate_id() - 1;
    expect(user).toEqual({
      id: expect_id,
      fullname: 'John Doe',
      username: 'johndoe',
      password: 'password123',
    });
    expect(userModel.users.length).toEqual(1);
    expect(userModel.users[0]).toEqual(user);
  });

  test('Find user by username', () => {
    const user = userModel.CreateUser('John Doe', 'johndoe', 'password123');
    const foundUser = userModel.findUserByUsername('johndoe');
    expect(foundUser).toEqual(user);
  });

  test('Find user by ID', () => {
    const user = userModel.CreateUser('John Doe', 'johndoe', 'password123');
    const foundUser = userModel.findUserById(user.id);
    expect(foundUser).toEqual(user);
  });

  test('Create and find user by username', () => {
    const user = userModel.CreateUser('John Doe', 'johndoe', 'password');
    const foundUser = userModel.findUserByUsername('johndoe');
    
    expect(foundUser).toEqual(user);
  });

  test('Remove user by ID', () => {
    const user = userModel.CreateUser('Jane Doe', 'janedoe', 'password');
    const removedUser = userModel.removeUserById(user.id);
    
    expect(removedUser).toEqual(user);
    expect(userModel.findUserById(user.id)).toBeUndefined();
  });

  test('Remove user by username', () => {
    const user = userModel.CreateUser('Charlie Chaplin', 'charlie', 'password');

    const removedUser = userModel.removeUserByUsername('charlie');

    expect(removedUser).toEqual({ id: user.id, fullname: 'Charlie Chaplin', username: 'charlie', password: 'password' });
    expect(userModel.findUserById(user.id)).toBeUndefined();
  });

  test('Update user by ID', () => {
    const user = userModel.CreateUser('Alice Wonderland', 'alice', 'password');
    const updatedUser = { fullname: 'Alice Updated' };

    const result = userModel.updateUserById(user.id, updatedUser);

    expect(result).toEqual({ id: user.id, username: 'alice', password: 'password', ...updatedUser });
    expect(userModel.findUserById(user.id)).toEqual(result);
  });

  test('Update user by username', () => {
    const user = userModel.CreateUser('Bob Builder', 'bob', 'password');
    const updatedUser = { fullname: 'Bob Updated', password: 'newpassword' };

    const result = userModel.updateUserByUsername('bob', updatedUser);

    expect(result).toEqual({ id: user.id, username: 'bob', ...updatedUser });
    expect(userModel.findUserById(user.id)).toEqual(result);
  });
});
