// Assignment code here
//Array of all possible characters
var upperCase= ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase= [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericCharacters= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters= ["!", "#", "$", "%", "^", "&", "*", "+", "<", ">", "?", "_", "@"];

var passwordCriteria = function () {
  // Ask user how many characters they would like their password to have
  /* If user enters number that is too large or too small, 
  alert window informs them of this and 
  asks them to pick again
  before returning to start of the function*/
  var numberOfCharacters = window.prompt("How many characters would you like your password to have? (Please enter a number between 8 and 128.)");
  if (numberOfCharacters < 8) {
    window.alert("Oops! That's not enough characters. Please pick a number between 8 and 128.");
    return passwordCriteria();
  } else if (numberOfCharacters > 128) {
    window.alert("Oops! That's too many characters. Please pick a number between 8 and 128.");
    return passwordCriteria();
  } 
  console.log(numberOfCharacters);

  // Ask user if they would like their password to be case sensitive
  var upperCaseBoolean = window.confirm("Would you like to use uppercase characters? Press 'ok' for yes and 'cancel' for no.");  
  console.log(upperCaseBoolean);

  var lowerCaseBoolean = window.confirm("Would you like to use lowercase characters? Press 'ok' for yes and 'cancel' for no.");  
  console.log(lowerCaseBoolean);

  // Ask user if they would like their password to have special characters
  var specialCharactersBoolean = window.confirm("Include special characters? Press 'ok' for yes and 'cancel' for no.");
  console.log(specialCharactersBoolean);

  // Ask user if they would like numeric characters
  var numericCharactersBoolean = window.confirm("Would you like your password to include numeric characters? Press 'ok' for yes and 'cancel' for no.");
  console.log(numericCharactersBoolean);

  var passwordText = document.querySelector("#password");

  var generatedPassword = "";

  //Create an array of the character types that the user selected
  var charArray = []
  var ch 
  if (upperCaseBoolean === true) {
    ch = upperCase[Math.floor(Math.random() * 26)]
    charArray.push(ch); 
  }
  if (lowerCaseBoolean == true) {
    ch = lowerCase[Math.floor(Math.random() * 26)]
    charArray.push(ch);
  }
  if (numericCharactersBoolean == true) {
    ch = numericCharacters[Math.floor(Math.random() * 10)]
    charArray.push(ch);
  }
  if (specialCharactersBoolean == true) {
    ch = specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    charArray.push(ch);
  }

  //use the created character array to choose characters from those type lists

  // for (var i = charArray.length; i < numberOfCharacters; i++) {
    
  // }
  while (charArray.length < numberOfCharacters) {
  }
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", passwordCriteria);

