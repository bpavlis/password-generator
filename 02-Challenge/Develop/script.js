// Assignment Code - DO NOT TOUCH BELOW
var generateBtn = document.querySelector("#generate");
//--------------------------------------


// Global variables:
var lengthOfChar; 
var includeNumbers; 
var includeSpecialCharacters;
var includeUpper;
var includeLower;

var finalPassword;   

var charChoice = [];
var charOptions = {
  lowercase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  uppercase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  numeric: ["0","1","2","3","4","5","6","7","8","9"],
  special: ["!","@","#","$","%","^","&","*",")","("],
}
//--------------------------------------


function generatePassword(){

  // var randomNumber = getARandomNumber() //this has one job so can be in the smaller scope
  // finalPassword = finalPassword + randomNumber;   //updated final password globally so all other functions can see/add 


  for(var i = 0; i < lengthOfChar; i++){
    var randomNum = Math.floor(Math.random() * charOptions);
    password = password + charChoice[randomNum];    //turns password into what was chosen for charChoice
  }
  return password;
}



function promptAnswers(){
  charChoice = [];    //to reset array so old data wasn't kept in there
  lengthOfChar = parseInt(prompt("How many characters? Enter a value from 8 to 128"));
  
  includeNumbers = confirm("Do you want numbers?");   //returns true or false
  includeSpecialCharacters = confirm("Do you want special characters?");
  includeLower = confirm("Do you want special lowercase letters?");
  includeUpper = confirm("Do you want special upercase letters?");

  if (includeNumbers===true){   //own function?
    charChoice = charChoice.concat(charOptions.numeric);    //concats numeric into empty array
  }   //if not true - wont return anything
  if (includeSpecialCharacters===true){   //own function?
    charChoice = charChoice.concat(charOptions.special);    
  }
  if (includeLower===true){   //own function?
    charChoice = charChoice.concat(charOptions.lowercase);    
  }
  if (includeUpper===true){   //own function?
    charChoice = charChoice.concat(charOptions.uppercase);    
  }
  return true;
}





// DO NOT TOUCH DOWN - Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
//--------------------------------------

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
