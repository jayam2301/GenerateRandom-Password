const passwordB = document.getElementById("password");
const length = 10;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const digit = "0123456789";
const special = "@!#$%&*<>(+-){}[]";
const allChars = upperCase + lowerCase + digit + special;
function createR() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += digit[Math.floor(Math.random() * digit.length)];
  password += special[Math.floor(Math.random() * special.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordB.value = password;
}
function copy() {
  passwordB.select();
  document.execCommand("copy");
}
