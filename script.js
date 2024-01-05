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
    var numberCharacters = ["0","1","2","3","4","5","6","7","8","9"];
    var uppercaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var lowercaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var specialCharacters = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","}","]","|",":",";","'","<",",",">",".","?","/"];
    var possibleCharacters = [];



  // at the very end of this function, you are returning a value
  // the value is the random password
  // return yourPasswordVariable
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

