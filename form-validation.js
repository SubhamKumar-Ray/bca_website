function validateRegisterForm(event) {
  event.preventDefault();

  const password = document.querySelector('input[type="password"]').value;
  const confirmPassword = document.querySelectorAll('input[type="password"]')[1].value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return false;
  }

  alert("Registration Successful!");
  return true;
}
