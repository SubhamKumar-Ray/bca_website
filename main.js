document.addEventListener('DOMContentLoaded', function(){
  const navBar=document.querySelector('nav');
  const loggedInUser=localStorage.getItem('loggedInUser');
  if(loggedInUser){
    const logoutLink=document.createElement('a');
    logoutLink.href="logout.html";
    logoutLink.textContent="Logout";
    navBar.appendChild(logoutLink);
  }
});

function registerUser(event){
  event.preventDefault();
  const username=document.getElementById('regUsername').value;
  const password=document.getElementById('regPassword').value;
  if(!username || !password){alert("Fill all fields!"); return;}
  localStorage.setItem(username,password);
  alert("Registration successful!");
  window.location.href="login.html";
}

function loginUser(event){
  event.preventDefault();
  const username=document.getElementById('loginUsername').value;
  const password=document.getElementById('loginPassword').value;
  const savedPassword=localStorage.getItem(username);
  if(savedPassword && savedPassword===password){
    localStorage.setItem('loggedInUser',username);
    alert("Login successful!");
    window.location.href="index.html";
  }else{
    alert("Invalid username or password!");
  }
}

function logoutUser(){
  localStorage.remove
