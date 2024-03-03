function onload() {}

function getDataForlogin() {
    const form = document.getElementById('loginForm');
  
    const username = form.elements.username.value;
    const password = form.elements.password.value;
  
    const data = {
      username,
      password,
    };
  
    return data;
}  


function getDataForSignIn() {
    const form = document.getElementById('signupForm');
  
    const fullname = form.elements.fullname.value;
    const username = form.elements.username.value;
    const password = form.elements.password.value;
  
    const data = {
      fullname,
      username,
      password,
    };
  
    return data;
}  

function handlelogin() {
    const url = 'http://localhost:3000/api/auth/login';
  
    const data = getDataForlogin();
  
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  
    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
}

function handlesignin() {
    const url = 'http://localhost:3000/api/auth/signin';
  
    const data = getDataForSignIn();
  
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  
    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
}  
