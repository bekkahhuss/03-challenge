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
  passwordNum();
  passwordSpecial();
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
const numbers ='0123456789';
const special ='!"#$%&-()*=+,./:;<>?@{[}]\|_~`^';

//use a function to generate a random string of characters 
function generateString(length) {
  var result = ' ';
  const alphabetLength = alphabet.length;
  const numbersLength = numbers.length;
  const specialLength = special.length;
  for ( var i = 0; i < length; i++) {
    result += alphabet.charAt(Math.floor(Math.random() * alphabetLength));
    if (passwordChoice.num === "yes") {
      result += numbers.charAt(Math.floor(Math.random() * numbersLength));
    }
    if (passwordChoice.special === "yes") {
      result += special.charAt(Math.floor(Math.random() * specialLength));
    }
  }
  if (passwordChoice.case === "lowercase") {
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

//use a function to window.prompt "Do you want your password to be uppercase or lowercase?" User must choose one to proceed.
  // use ans if statement to determine yes or no. else repeat prompt
  //store answer as var passwordChoice.case
function passwordCase() {
  var whatCase = window.prompt("Do you want your password to be uppercase or lowercase?");
  whatCase = whatCase.toLocaleLowerCase();
  if (whatCase === "uppercase") {
    passwordChoice.case = whatCase;
  }
  else if (whatCase === "lowercase") {
    passwordChoice.case = whatCase;
  
  }
  else {
    return passwordCase();
  }
};

//use a function to window.prompt"Do you want your password to have numbers, yes or no?" User must choose one to proceed. 
// use an if statement to determine yes or no, else repeat prompt
//Store answer in var = passwordChoice.num
function passwordNum() {
  var whatNum = window.prompt("Do you want your password to have numbers, yes or no?");
  whatNum = whatNum.toLocaleLowerCase();
  if (whatNum === "yes") {
    passwordChoice.num = whatNum;
  }
  else if (whatNum === "no") {
    passwordChoice.num = whatNum;
  }
  else {
    return passwordNum();
  }
};


//use a function to window.prompt"Do you want your password to have special characters, yes or no?" User must choose one to proceed. 
// use an if statement to determine yes or no, else repeat prompt
//Store answer in var = passwordChoice.special
function passwordSpecial() {
  var whatSpecial = window.prompt("Do you want your password to have special characters, yes or no?");
  whatSpecial = whatSpecial.toLocaleLowerCase();
  if (whatSpecial === "yes") {
    passwordChoice.special = whatSpecial;
  }
  else if (whatSpecial === "no") {
    passwordChoice.special = whatSpecial;
  }
  else {
    return passwordSpecial();
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
