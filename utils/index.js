const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

function generateToken(userId, username) {
  return jwt.sign(
    {
      userId,
      username,
    },
    process.env.JWT_ACCESS_SECRET,
    {
      expiresIn: "3h",
    }
  );
}

function verifyToken(token) {
  try {
    return jwt.verify(token, process.env.JWT_ACCESS_SECRET);
  } catch (err) {
    return false;
  }
}

function isauthenticated(request) {
  let token = request.cookies?.token;

  if (token) {
    let decoded = verifyToken(token);
    return decoded ? true : false;
  }
}

function hashPassword(password) {
  return bcrypt.hashSync(password, Number(process.env.SALT_INT));
}

function verifyPassword(password, hashedPassword) {
  return bcrypt.compareSync(password, hashedPassword);
}

module.exports = {
  hashPassword,
  verifyPassword,
  isauthenticated,
  verifyToken,
  generateToken,
};
