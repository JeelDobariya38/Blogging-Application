const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

function generateToken(user) {
   const token = jwt.sign(
    {
      username: user.username,
      id: user._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "3h",
    }
  );

  return token;
}
