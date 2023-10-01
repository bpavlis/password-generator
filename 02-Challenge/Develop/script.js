// Assignment Code - DO NOT TOUCH BELOW
var generateBtn = document.querySelector("#generate");



var numberOfCharacters; //response will go into this var but this wasnt in global scope so moved up here 
var includeNumbers; //only sending back true or false   
var includeSpecialCharacters;

var finalPassword = "";   //empty so can get changed



function getARandomNumber(){  //just will get you a random # - only job
  return 9;
}


function generatePassword(){
  numberOfCharacters = prompt("How many characters?")
  includeNumbers = confirm("Do you want numbers?")

  var randomNumber = getARandomNumber() //this has one job so can be in the smaller scope
  finalPassword = finalPassword + randomNumber;   //updated final password globally so all other functions can see/add 



}







// function generatePassword(){

//   var name = prompt("What is your name?") //prompt - answer stored inside variable - might not leave this here? - this will get interpreted as a string - will learn how to change to #
//   var confirm = confirm("This is a confirm button example") //confirm - true or false put inside this variable



//   return ""
// }





// DO NOT TOUCH DOWN - Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
