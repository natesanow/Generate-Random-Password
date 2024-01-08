// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
  

// make the function generatePassword
function generatePassword() {
  var numberCharacters = ["0","1","2","3","4","5","6","7","8","9"];
  var uppercaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var lowercaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var specialCharacters = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","}","]","|",":",";","'","<",",",">",".","?","/"];
  var possibleCharacters = [];

  numberofCharacters = prompt("How many characters do you want in your password? Choose between 8 and 128 characters");
  if (numberofCharacters < 8 || numberofCharacters > 128) {
    return "Please choose valid number of characters.";
  } else if (isNaN(numberofCharacters)) {
    numberofCharacters = prompt("Please enter a valid number");
  }
  else {
    alert("Your password will be " + numberofCharacters + " characters long");
  }

  haslowercase = confirm("Do you want lowercase characters?");
  if (haslowercase) {
    var turnToLowercase = alert("Your password will have lowercase characters");
  }
  else {
    alert("Your password will Not have lowercase characters");
  }

  hasUppercase = confirm("Do you want to uppercase characters?");
  if (hasUppercase) {
    alert("Your password will have uppercase characters");
  }
  else {
    alert("Your password will Not have uppercase characters");
  }

  hasNumbers = confirm("Do you want to use numbers?");
  if (hasNumbers) {
    alert("Your password will have numbers");
  }
  else {
    alert("Your password will Not have numbers");
  }

  hasSpecial = confirm("Do you want special characters?");
  if (hasSpecial) {
    alert("Your password will have special characters");
  }
  else {
    alert("Your password will Not have special characters");
  }

  if (haslowercase === false && hasUppercase === false && hasNumbers === false && hasSpecial === false) {
    return "Please select at least one character type";
  };

  if (haslowercase) {
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
  }
  if (hasUppercase) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
  }
  if (hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numberCharacters);
  }
  if (hasSpecial) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }

  
  let randomPassword = ""
  for (let i = 0; i < numberofCharacters; i++) {
    let rng =[Math.floor(Math.random() * possibleCharacters.length)];
    randomPassword = randomPassword + possibleCharacters[rng];
  }
  return randomPassword;
}  

// at the very end of this function, you are returning a value
// the value is the random password
// return yourPasswordVariable



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

