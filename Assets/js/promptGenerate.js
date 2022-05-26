//USER PROMPT GENERATE
// function generatePassword() {
//   //1) request/store password length
//   characters = parseInt(prompt("How many characters would you like in your password?"));
//   // console.log(characters);
//   //1.1) restrict character length
//   if (characters < 8 || characters > 128) {
//     alert("Your password character count must be at least 8 characters and no more than 128 characters in length.")
//     generatePassword();
//   };
//   //2.1) Validate lowercase character inclusion
//   var chooseLower = confirm("Do you want to include lowercase characters?")
//   if (chooseLower == true) {
//     userPass = userPass.concat(lowercaseChar);
//   }
//   //2.2) Validate uppercase character inclusion
//   var chooseUpper = confirm("Do you want to include uppercase characters?")
//   if (chooseUpper == true) {
//     userPass = userPass.concat(uppercaseChar);
//   }
//   //2.3) Validate numeric character inclusion
//   var chooseNumber = confirm("Do you want to include numbers?")
//   if (chooseNumber == true) {
//     userPass = userPass.concat(numericChar);
//   }
//   //2.4) Validate special character inclusion
//   var chooseSpecial = confirm("Do you want to include special characters?")
//   if (chooseSpecial == true) {
//     userPass = userPass.concat(specialChar);
//   }
//   //2.5) Validate a character type was selected
//   if ((chooseLower == false) &&
//     (chooseUpper == false) &&
//     (chooseNumber == false) &&
//     (chooseSpecial == false)
//     ) {
//       alert("You must choose at least 1 character type.");
//       generatePassword();
//     }
//   //loop through final array of potential characters and randomly select characters until the password length is reached
//   for (var i = 0; i < 1 + characters; i++){
//     passwordNew += userPass[Math.floor(Math.random() * userPass.length)];
//   };
//   return passwordNew;
// };
