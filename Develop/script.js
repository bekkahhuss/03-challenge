// Assignment code here

// Write an application that randomly generates a password based on four inclusion choices made by the user. 
// When the user clicks the button they asked four questions that determine the variables that are used to make the password. 
  //How long do you want your password? Must be between 8 and 128 characters. Store answer in var = passwordChoice.length 
  //Do you want your password to be uppercase or lowercase? User must choose one to proceed. Store answer in var = passwordChoice.case
  // Do you want your password to have numbers, yes or no? User must choose one to proceed. Store answer in var = passwordChoice.num
  //Do you want your password to have special characters, yes or no? User must choose one to proceed. Store answer in var = passwordChoice.special
//the passwordChoice variables are stored as a string which can be used to generate the final password

// When the user clicks the button they are asked four questions that determine the variables that are used to make the password. 
function generatePassword() {
  passwordLength();
  passwordCase();
  // console.log("test");
  console.log(passwordChoice);
  return generateString(passwordChoice.length); 
};

//the passwordChoice variables are stored as a string which can be used to generate the final password
var passwordChoice = {
  length: null,
  case: null,
  num: null, 
  special: null
};
const alphabet ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';

//use a function to generate a random string of characters 
function generateString(length) {
  var result = ' ';
  const alphabetLength = alphabet.length;
  for ( var i = 0; i < length; i++) {
    result += alphabet.charAt(Math.floor(Math.random() * alphabetLength));

  }
  if (passwordChoice.case === "lowercase" || passwordChoice.case === "LOWERCASE") {
    result = result.toLocaleLowerCase();
  }

  console.log(result);
  return result;

 
};

  //use a function to window.prompt "How long do you want your password? Must be between 8 and 128 characters."
    //use an if statement to accept an input between 8 and 128. else repeat prompt. 
    //store answer as var passwordChoice.length
function passwordLength() {
  var whatLength= window.prompt("How long do you want your password? Must be between 8 and 128 characters.");
  if(whatLength >= 8 && whatLength <= 128) {
    passwordChoice.length = whatLength;
  }
  else {
    return passwordLength();
  }
  
};

//use a function to window.prompt "Do you want your password to be uppercase or lowercase? User must choose one to proceed."
  // use ans if statement to determine yes or no. else repeat prompt
  //store answer as var passwordChoice.case
function passwordCase() {
  var whatCase = window.prompt("Do you want your password to be uppercase or lowercase?");
  if (whatCase === "uppercase" || whatCase === "UPPERCASE" ) {
    passwordChoice.case = whatCase;
  }
  else if (whatCase === "lowercase" || whatCase === "LOWERCASE") {
    passwordChoice.case = whatCase;
  }
  else {
    return passwordCase();
  }
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
