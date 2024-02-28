const get_user = (req, res) => {
  let username = req.param.username;

  if (!username) {
    return res.status(400).json({
      message: "Please provide all the required fields!!!",
      success: false
    });
  }
  
  let user = get_user(username);
  user.password = undefined;
  
  if (!user) {
    return res.status(404).json({
      message: "User not found!!!",
      success: false
    });
  }
  else {
    return res.status(200).json({
      data: user,
      message: "Here is User with username requested",
      success: true
    })
  }
}

module.exports = get_user;
