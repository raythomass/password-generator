// Assignment code here
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numeric = '1234567890';
var symbol = "!#$%&()*+,-./:;<=>?@[]^_{|}~";

var symbolInd = symbol.split(' ');

var everything = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%&()*+,-./:;<=>?@[]^_{|}~";

function lengthPrompt(){
  lengthEnter = prompt("Please enter the length of Password. Must be at least 8 characters and no more then 128 characters.");
  if (lengthEnter > 8 && lengthEnter < 128){
    console.log("Good");
  }
  else if(lengthEnter < 8 || lengthEnter > 128){
    console.log("Bad");
    alert('Try Again');
    }
}

function charPrompt(){
  charEnter = prompt("Please enter the characters you would like to use.");
  if (charEnter == symbolInd[i]){
    console.log("Good");
  }
}

charPrompt();




// generateBtn.addEventListener('click', function(){
//   lengthPrompt = prompt("Please enter the length of Password. Must be at least 8 characters and no more then 128 characters.");
//   if (lengthPrompt > 8 && lengthPrompt < 128){
//     // console.log("Good");
//     charPrompt();
//   }
//   else if(lengthPrompt < 8 || lengthPrompt > 128){
//     // console.log("Bad");
//     alert('Try Again');
//   }
// });
















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
