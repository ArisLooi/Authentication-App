const titleTag = document.getElementById('title');
const descriptionTag = document.getElementById('description');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmPasswordContainer = document.getElementById(
  'confirm-password-container'
);
const confirmPasswordInput = document.getElementById('confirm-password');
const formButton = document.getElementById('form-button');
const accountAuthDescriptionTag = document.getElementById(
  'account-auth-description'
);
const accountAuthTitleTag = document.getElementById('account-auth-title');

function toggleAuth() {
  const isLoginForm = titleTag.textContent === 'Welcome back!';
  titleTag.textContent = isLoginForm ? 'Hello There!' : 'Welcome back!';
  descriptionTag.textContent = isLoginForm
    ? 'Ready to unlock endless possibilities? Sign up now and let the adventure begin!'
    : "Login to your account and let's get that productivity soaring!";
  confirmPasswordContainer.style.display = isLoginForm ? 'block' : 'none';
  formButton.textContent = isLoginForm ? 'Sign Up' : 'Login';
  accountAuthDescriptionTag.textContent = isLoginForm
    ? 'Have an account?'
    : "Don't have an account?";
  accountAuthTitleTag.textContent = isLoginForm ? 'Login' : 'Sign Up';
}

const users = [];

function handleSubmit() {
  const username = usernameInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (titleTag.textContent === 'Welcome back!') {
    login(username, password);
  } else {
    signUp(username, password, confirmPassword);
  }
}

function login(username, password) {
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    alert('Successful login!');
  } else {
    alert('User not found. Please sign up first.');
  }
}

function signUp(username, password, confirmPassword) {
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (password !== confirmPassword) {
    alert('Passwords do not match.');
  } else if (!passwordPattern.test(password)) {
    alert(
      'Password must be at least 8 characters long and include a mix of upper and lower case letters, numbers, and special characters.'
    );
  } else if (username === 0 || password === 0) {
    alert('Please enter a username and password');
  } else {
    users.push({
      username: username,
      password: password,
    });
    alert('Sign up successful! You can now log in.');
    toggleAuth();
  }
}
