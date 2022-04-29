// Assignment code here
//Array of all possible characters
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["!", "#", "$", "%", "^", "&", "*", "+", "<", ">", "?", "_", "@"];

var passwordCriteria = function buttonClick() {
  //This section of code is where the user chooses the criteria for their password
  var numberOfCharacters = window.prompt("How many characters would you like your password to have? (Please enter a number between 8 and 128.)");
  if (numberOfCharacters < 8) {
    window.alert("Oops! That's not enough characters. Please pick a number between 8 and 128.");
    return passwordCriteria();
  } else if (numberOfCharacters > 128) {
    window.alert("Oops! That's too many characters. Please pick a number between 8 and 128.");
    return passwordCriteria();
  }
  console.log(numberOfCharacters);

  var upperCaseBoolean = window.confirm("Would you like to use uppercase characters? Click 'ok' for yes and 'cancel' for no.");
  console.log(upperCaseBoolean);

  var lowerCaseBoolean = window.confirm("Would you like to use lowercase characters? Click 'ok' for yes and 'cancel' for no.");
  console.log(lowerCaseBoolean);

  var specialCharactersBoolean = window.confirm("Include special characters? Click 'ok' for yes and 'cancel' for no.");
  console.log(specialCharactersBoolean);

  var numericCharactersBoolean = window.confirm("Would you like your password to include numeric characters? Click 'ok' for yes and 'cancel' for no.");
  console.log(numericCharactersBoolean);

  // This sets the user's choices as options for the generator
  var options = {
    length: numberOfCharacters,
    specialCharacters: specialCharactersBoolean,
    upperCase: upperCaseBoolean,
    lowerCase: lowerCaseBoolean,
    numericCharacters: numericCharactersBoolean
  }

  // If the user does not select any characters, the window alert will tell the user to choose at least one type of character for their password
  if (specialCharactersBoolean === false && upperCaseBoolean === false && lowerCaseBoolean === false && numericCharactersBoolean === false) {
    window.alert("Oops! You can't make a passwork with no characters! Please choose at least one criteria.");
    passwordCriteria();
  }
  return options;
}

//concat the character arrays chosen by the user
var charArray = [].concat(upperCase, lowerCase, specialCharacters, numericCharacters);

//create a function to choose one character of each chosen type
function writePassword() {
  if (upperCaseBoolean === true) {
    ch = upperCase[Math.floor(Math.random() * 26)]
    charArray.push();
  }
  if (lowerCaseBoolean == true) {
    ch = lowerCase[Math.floor(Math.random() * 26)]
    charArray.push();
  }
  if (numericCharactersBoolean == true) {
    ch = numericCharacters[Math.floor(Math.random() * 10)]
    charArray.push();
  }
  if (specialCharactersBoolean == true) {
    ch = specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    charArray.push();
  }
}

Array.prototype.charArray = function generatedPassword() {
  return ch[Math.floor(math.random() * ch.length)];
}

//set variable "passwordText" equal to the function so that the result generates in the password text box
passwordText = function generatePassword() {
  for (var i = charArray.length; i < length; i++) {
    charArray.getItem();
  }
}

// function generatePassword (charArray, last = undefined) {
//   if (charArray.length === 0) {
//     return null;
//   } else if (charArray.length === 1) {
//     return charArray[0];
//     let num = 0;
//     do {
//       num = Math.floor(Math.random()*charArray.length);
//     } while (charArray[num] === last);
//     return charArray[num];
//     }
//   }
// }

var generatedPassword = "";
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


//Create an array of the character types that the user selected
// var charArray = []
// var ch 

//use the created character array to choose characters from the lists

// while (charArray.length < numberOfCharacters) {
//     upperCase.getItem;
//     lowerCase.getItem;
//     specialCharacters.getItem;
//     numericCharacters.getItem; 
// }


// function randomCharacter()

// Get references to the #generate element

// Write password to the #password input
// function writePassword();
//   var password = generatedPassword();
//   console.log(password);

//   passwordText.value = password;


// Add "click" event listener to generate button to start the passwordCriteria function
generateBtn.addEventListener("click", passwordCriteria);
function writePassword(){};
function generatedPassword(){};