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
  // passwordCase();
  passwordUpper();
  passwordLower();
  passwordNum();
  passwordSpecial();
  realTruth();
  // // console.log("test");
  // console.log(passwordChoice);
  console.log(truthInt);
   return generateString(choiceLength); 
};

// truthInt variables are stored as a string to generate a value representing the number of "yes" choices were made by the user. 
// Refactor Theory: function generateString(passwordChoice.length / truthInt) will result in correct number of characters in password. 

// var truthInt = {
//   upper: null,
//   lower: null,
//   num: null,
//   special: null
// }


//the passwordChoice variables are stored as a string which can be used to generate the final password
// var passwordChoice = {
//   length: null,
//   // case: null,
//   upper: null,
//   lower: null,
//   num: null, 
//   special: null
// };

var choiceLength = null; 
var choiceUpper = null; 
var choiceLower = null; 
var choiceNum = null; 
var choiceSpecial = null; 


var truthInt = 4;

const alphabetUpper ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphabetLower ='abcdefghijklmnopqurstuvwxyz';
const numbers ='0123456789';
const special ='!"#$%&-()*=+,./:;<>?@{[}]\|_~`^';

//use a function to generate a random string of characters 
function generateString(length) {
  var result = ' ';
  const alphabetUpperLength = alphabetUpper.length;
  const alphabetLowerLength = alphabetLower.length;
  const numbersLength = numbers.length;
  const specialLength = special.length;
 
  for ( var i = 0; i < length; i++) {
    if (choiceUpper === 1) {
      result += alphabetUpper.charAt(Math.floor(Math.random() * alphabetUpperLength));
    }
    if (choiceLower === 1) {
      result += alphabetLower.charAt(Math.floor(Math.random() * alphabetLowerLength));
    }
    if (choiceNum === 1) {
      result += numbers.charAt(Math.floor(Math.random() * numbersLength));
    }
    if (choiceSpecial === 1) {
      result += special.charAt(Math.floor(Math.random() * specialLength));
    } 
  }
  // if (passwordChoice.case === "lowercase") {
  //   result = result.toLocaleLowerCase();
  // }

  console.log(result);
  return result;

 
};

  //use a function to window.prompt "How long do you want your password? Must be between 8 and 128 characters."
    //use an if statement to accept an input between 8 and 128. else repeat prompt. 
    //store answer as var passwordChoice.length
function passwordLength() {
  var whatLength= window.prompt("How long do you want your password? Must be between 8 and 128 characters.");
  if(whatLength >= 8 && whatLength <= 128) {
    choiceLength = (whatLength / truthInt);
    console.log(choiceLength);
  }
  else {
    return passwordLength();
  }
  
};

//use a function to window.prompt "Do you want your password to be uppercase or lowercase?" User must choose one to proceed.
  // use ans if statement to determine yes or no. else repeat prompt
  //store answer as var passwordChoice.case
// function passwordCase() {
//   var whatCase = window.prompt("Do you want your password to be uppercase or lowercase?");
//   whatCase = whatCase.toLocaleLowerCase();
//   if (whatCase === "uppercase") {
//     passwordChoice.case = whatCase;
//   }
//   else if (whatCase === "lowercase") {
//     passwordChoice.case = whatCase;
  
//   }
//   else {
//     return passwordCase();
//   }
// };


//use a function to window.prompt "Do you want your password to have uppercase letters? Yes or no." User must choose one to proceed. 
//Use and if statement to determine yes or no, else repeat prompt 
//Store answer in var = passwordChoice.upper
function passwordUpper() {
  var whatUpper = window.prompt("Do you want your password to have uppercase letters? Yes or no.");
  whatUpper = whatUpper.toLocaleLowerCase();
  if (whatUpper === "yes"){
   choiceUpper = 1;
    // truthInt.upper = 1;
  }
  else if (whatUpper === "no") {
   choiceUpper = 0;
    // truthInt.upper = 0;
  }
  else {
    return passwordUpper();
  }
};

//use a function to window.prompt "Do you want your password to have lowercase letters? Yes or no." User must choose one to proceed. 
//Use and if statement to determine yes or no, else repeat prompt 
//Store answer in var = passwordChoice.lower
function passwordLower() {
  var whatLower = window.prompt("Do you want your password to have lowercase letters? Yes or no.");
  whatLower = whatLower.toLocaleLowerCase();
  if (whatLower === "yes"){
    choiceLower = 1;
    // truthInt.lower = 1;
  }
  else if (whatLower === "no") {
    choiceLower = 0;
    // truthInt.lower = 0;
  }
  else {
    return passwordLower();
  }
};


//use a function to window.prompt"Do you want your password to have numbers, yes or no?" User must choose one to proceed. 
// use an if statement to determine yes or no, else repeat prompt
//Store answer in var = passwordChoice.num
function passwordNum() {
  var whatNum = window.prompt("Do you want your password to have numbers, yes or no?");
  whatNum = whatNum.toLocaleLowerCase();
  if (whatNum === "yes") {
   choiceNum = 1;
    // truthInt.num = 1;
  }
  else if (whatNum === "no") {
   choiceNum = 0;
    // truthInt.num = 0;
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
    choiceSpecial = 1;
    // truthInt.special = 1;
  }
  else if (whatSpecial === "no") {
    choiceSpecial = 0;
    // truthInt.special = 0;
  }
  else {
    return passwordSpecial();
  }
};

function realTruth() {
  var newTruth = [choiceUpper, choiceLower, choiceNum, choiceSpecial];
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  
 console.log(newTruth.reduce(reducer));
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
