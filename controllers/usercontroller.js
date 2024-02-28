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

const login = (req, res) => {
  let username = req.param.username;
  let password = req.param.password;

  if (!username || !password) {
    return res.status(400).json({
      message: "Please provide all the required fields!!!",
      success: false
    });
  }

  let user = get_user(username);
  
  if (!user) {
    return res.status(404).json({
      message: "User not found!!!",
      success: false
    });
  }
  
  if (check_password(user.password, password)) {
    let token = get_token(user);
    res.cookie("token", token);

    return res.status(200).json {
      access_token: token,
      messsage: "User loggedin successfully!!!",
      success: true
    }
  } else {
    return res.status(400).json({
      message: "Invalid password!!!",
      success: false
    });
  }
}

const signup = (req, res) => {
  let fullname = req.body.fullname;
  let username = req.body.username;
  let password = req.body.password;

  if (!fullname || !username || !password) {
    return res.status(400).json({
      message: "Please provide all the required fields!!!",
      success: false
    });
  }
  
  if (!get_user(username)) {
    return res.status(400).json({
      message: "User already exists!!!",
      success: false
    });
  }

  let new_user = {
    fullname: fullname,
    username: username,
    password: password
  };

  let user = add_user(new_user);
  let token = get_token(new_user);
  user.password = undefined;

  res.cookie("token", token);
  res.json({
    data: user,
    access_token: token,
    message: "User created successfully!!!",
    success: true
  });
}

module.exports = {
  get_user,
  login,
  signup
};
