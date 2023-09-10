// Assignment code here
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numeric = '1234567890';
var symbol = "!#$%&()*+,-./:;<=>?@[]^_{|}~";

//Splits the original arrays into individual characters
var lowerInd = lowerCase.split('');
var upperInd = upperCase.split('');
var numberInd = numeric.split('');
var symbolInd = symbol.split('');

var everything = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%&()*+,-./:;<=>?@[]^_{|}~";
var possChars = "";

//Making these prompts accesible globally and then will chnage them locally
//Tutor Help: If these are not global they are not accesible outside thhe local functions
var lengthEnter = 0;
var lowerPrompt = 0;
var upperPrompt = 0;
var numericPrompt = 0;
var specialPrompt = 0;

//Asks the length
function lengthPrompt(){
  lengthEnter = prompt("Please enter the desired length of your password. Must be at least 8 characters and no more then 128 characters.", "Enter Number");
  if (lengthEnter > 8 && lengthEnter < 128){
    console.log("Correct Number");
    askLower();
  }
  else if(lengthEnter < 8 || lengthEnter > 128){
    console.log("Incorrect Number");
    alert('Try Again');
    }
}

//Asks if lowercase is included
function askLower(){
  lowerPrompt = prompt("Would you like to include lowercase letters?", "Yes or No");
  if (lowerPrompt == "Yes"){
    console.log("Good");
    askUpper();
  }
  else if(lowerPrompt == "No"){
    console.log("Bad");
    askUpper();
  }
  else if(lowerPrompt !== "Yes" && lowerPrompt !== "No"){
    console.log("No Answer");
    alert("Try Again")
  }
}

//Asks if uppercase is included
function askUpper(){
  upperPrompt = prompt("Would you like to include uppercase letters?", "Yes or No");
  if (upperPrompt == "Yes"){
    console.log("Good");
    askNumeric();
  }
  else if(upperPrompt == "No"){
    console.log("Bad");
    askNumeric();
  }
  else if(upperPrompt !== "Yes" && upperPrompt !== "No"){
    console.log("No Answer");
  }
}
//Asks if numbers are included
function askNumeric(){
  numericPrompt = prompt("Would you like to include numbers?", "Yes or No");
  if (numericPrompt == "Yes"){
    console.log("Good");
    askSpecial();
  }
  else if(numericPrompt == "No"){
    console.log("Bad");
    askSpecial();
  }
  else if(numericPrompt !== "Yes" && numericPrompt !== "No"){
    console.log("No Answer");
  }
}

//Asks if symbols are included
function askSpecial(){
  specialPrompt = prompt("Would you like to include special characters?", "Yes or No");
  if (specialPrompt == "Yes"){
    console.log("Good");
    generatePassword();
  }
  else if(specialPrompt == "No"){
    console.log("Bad");
    generatePassword();
  }
  else if(specialPrompt !== "Yes" && specialPrompt !== "No"){
    console.log("No Answer");
  }
  console.log(specialPrompt);
}

//Gets random characters based on possible characters and returns the possChar var into the index number it calculated
//Tutor Help: return with something next to it will return the value added. return possChars[randomIndex] designates that so I can use it in finalPassword
function getRandomCharacter(possCharacters) {
  var randomIndex = Math.floor(Math.random()*possCharacters.length) 
  return possChars[randomIndex]
}


//Generates password by adding in the original string arrays to possChars 
function generatePassword(){
  if (lowerPrompt == "Yes"){
    possChars += lowerCase;
  }
  if (upperPrompt == "Yes"){
    possChars += upperCase;
  }
  if (numericPrompt == "Yes"){
    possChars += numeric;
  }
  if (specialPrompt == "Yes"){
    possChars += symbol;
  }
  console.log(possChars);

  if(possChars.length == 0) {
    alert("You did not say Yes to one of the password criteria");
    return;
  }

  //Declaring that the finalPassword is the number entered for length and then adding a random character from possChars that amount of times
  var finalPassword = "";
  for(var i = 0 ; i<lengthEnter; i++) {
    finalPassword += getRandomCharacter(possChars);
  }
  console.log(finalPassword)
  passwordText.value = finalPassword;

}

//Runs the event of clicking the button
generateBtn.addEventListener('click', function(){
  lengthPrompt();
});






//I commented all this out so I could understand it from scratch.

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
