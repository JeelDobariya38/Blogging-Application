function toggleVisiblity(id) {
  let elem = document.getElementById(id);
  elem.classList.toggle("hidden");
}

function getAccessToken() {
  return localStorage.getItem("Access_Token");
}

function setAccessToken(token) {
  localStorage.setItem("Access_Token", token);
}

function getUserInfo(token) {
  /* return data, successflag */
}

function isUserLogin() {
  /* return a data, sucessflag. */
  if (localStorage.getItem("Access_Token") === null) {
    return {
      success: false,
    };
  } else {
    return {
      data: getUserInfo(token),
      success: true,
    };
  }
}

function login(username, password) {
  /* calls api to check whether the passed credital
  are correct or not if correct, then the func will set
  localStorage.Access_Token to the the token return by
  the api and then return true otherwise, return false */
}

function signin(fullname, username, password) {
  /* calls api to register a user then the func will set
  localStorage.Access_Token to the the token return by
  the api and then return true otherwise, return false */
}
