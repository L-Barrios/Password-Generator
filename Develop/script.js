//Function To Generate Texts for Password
function generatePasswordText(charCount, numReq, specialReq, upperReq, lowerReq){
var tPassword = ""; // Empty string for the password text
var charOpt = []; // Empty array for the character options
// Numerical Array 
var numerical = [ "1", "2", "3", "4", "5", "6", "6", "7", "8", "9", "0"];
// Special Character Array
var specialChars = [
  "!", "@", "#", "$", "%", "^","&","*","(",")", "_", "-", "+","=","<", ">","~"
];
// Uppercase Letter Array
var upperCase = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", 
"P", "Q", "R","S", "T", "U", "V", "W", "X", "Y", "Z"];
// Lowercase Letter Array
var lowerCase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k","l","m", "o",
"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Checking for every selection


if (numReq) {
  charOpt = charOpt.concat(numerical);
}

if (specialReq) {
  charOpt = charOpt.concat(specialChars); 
}

if (upperReq) {
  charOpt = charOpt.concat(upperCase);
}

if(lowerReq) {
  charOpt = charOpt.concat(lowerCase)
}

return tPassword;
}// Generate Password Function closes

//Function to Generate Password
function generatePassword() { 
  //Prompt user amount of characters and confirming if valid or invalid
  var charCount = Number(prompt(" Please enter the range of characters for your password and must be between 8 - 128."));
  if (charCount >= 8 && charCount <= 128){
    // Prompt user if they want numbers 
    var numReq = confirm( "Would you like for your password to include numbers?");
    // Prompt user if they want special character 
    var specialReq = confirm( "Would you like for your password to inculde speacial characters?");
    //Prompt user if they want uppercase letter 
    var upperReq = confirm("Would you like for your password to include uppercase letters?");
    //Prompt user if they want lowercase letter
    var lowerReq = confirm( "Would you like for your password to include lowercase letters?");
  } else {
    alert ( "Please enter a valid character range. Must be betweem 8 - 128.");
  }
  // Check if at least one is true
  if ( numReq === true || specialReq === true || upperReq === true || lowerReq === true) {
    return generatePasswordText(charCount, numReq, specialReq, upperReq, lowerReq)
  }
  // Store input
  var passwordOpts = {
    length: length, 
    numReq: numReq, 
    specialReq: specialReq, 
    lowerReq: lowerReq, 
    upperReq: upperReq
  };
  return passwordOpts; 
}


  // Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
