//log in form
document.getElementById('login-submit').addEventListener('click',function(){
    // get user email
  const emailField = document.getElementById('user-email');
  const userEmail = emailField.value;
   // get user password
  const userPassword = document.getElementById('user-password').value;
  // check email & password
  if(userEmail == 'moududahammed0@gmail.com' && userPassword == 'passwordis0'){
     window.location.href = 'banking.html';
  }
})

