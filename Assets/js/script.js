// prettier-ignore
var lowercaseChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// prettier-ignore
var uppercaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// prettier-ignore
var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// prettier-ignore
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];

// Assignment Code
var generateBtn = document.querySelector("#generate");
const lengthInput = document.querySelector("#charLength");
const lowerBox = document.querySelector("#lowerCase");
const upperBox = document.querySelector("#upperCase");
const numberBox = document.querySelector("#number");
const specialCharBox = document.querySelector("#specialChar");
const warningMessage = document.querySelector("#warningMsg");
//all checkboxes and checked boxes - nodelists converted to arrays
const checkBoxes = document.querySelectorAll("input[type='checkbox']");
const checkBoxesArr = Array.from(checkBoxes);

var userPass = [];
var passwordNew = [];

for (let i = 0; i < checkBoxesArr.length; i++) {
	checkBoxesArr[i].addEventListener("change", checkChecked);
}
function checkChecked(e) {
	const lastCheckedBox = e.target;
	const checkedBoxes = document.querySelectorAll(
		"input[type='checkbox']:checked"
	);
	const checkedBoxesArr = Array.from(checkedBoxes);

	//ensure there is always at least 1 checked box
	if (checkedBoxesArr.length === 0) {
		warningMessage.setAttribute("class", "warning-msg");
		warningMessage.textContent = "You must choose at least 1 character type";
		const warningMsgCountdown = setTimeout(() => {
			warningMessage.textContent = "";
			clearTimeout(warningMsgCountdown);
		}, 3000);
		lastCheckedBox.checked = true;
	}
}

//CHECKBOX GENERATE
function generatePassword() {
	let passwordLength = +lengthInput.value;

	//user inputs for password character types
	if (lowerBox.checked === true) userPass.concat(lowercaseChar);
	if (upperBox.checked === true) userPass.concat(uppercaseChar);
	if (numberBox.checked === true) userPass.concat(numericChar);
	if (specialCharBox.checked === true) userPass.concat(specialChar);
	//loop through final array of potential characters and randomly select characters until the password length is reached
	console.log({ userPass });
	console.log({ passwordLength });
	for (let i = 0; i <= passwordLength; i++) {
		passwordNew += userPass[Math.floor(Math.random() * userPass.length)];
	}
	return passwordNew;
}

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

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function logEvent(e) {
	console.log(e);
}
// document.body.addEventListener("click", logEvent);
