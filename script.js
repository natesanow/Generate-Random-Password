// Assignment Code
var generateBtn = document.querySelector("#generate");


// declare and assign your variables up here, in the global scope



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// make the function generatePassword
function generatePassword() {



  // at the very end of this function, you are returning a value
  // the value is the random password
  // return yourPasswordVariable
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

