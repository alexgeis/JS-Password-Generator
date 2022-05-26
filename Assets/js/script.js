// prettier-ignore
const lowercaseChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// prettier-ignore
const uppercaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// prettier-ignore
const numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// prettier-ignore
const specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];
//date
const currentYear = document.getElementById("currentYear");
currentYear.textContent = new Date().getFullYear();
// DOM Selectors
const passwordText = document.querySelector("#password");
const generateBtn = document.querySelector("#generate");
const lengthInput = document.querySelector("#charLength");
const lowerBox = document.querySelector("#lowerCase");
const upperBox = document.querySelector("#upperCase");
const numberBox = document.querySelector("#number");
const specialCharBox = document.querySelector("#specialChar");
const warningMessage = document.querySelector("#warningMsg");
//all checkboxes and checked boxes - nodelists converted to arrays
const checkBoxes = document.querySelectorAll("input[type='checkbox']");
const checkBoxesArr = Array.from(checkBoxes);

let userPass = [];
let passwordNew = [];

function generatePassword() {
	//clear inputs
	userPass = [];
	passwordNew = "";

	let passwordLength = +lengthInput.value;
	//validate password length
	if (passwordLength < 8 || passwordLength > 128) {
		warningMessage.setAttribute("class", "warning-msg");
		warningMessage.textContent =
			"Password length must be greater than 8 characters and no more than 128 characters";
		const warningMsgCountdown = setTimeout(() => {
			warningMessage.textContent = "";
			clearTimeout(warningMsgCountdown);
		}, 3000);
		lastCheckedBox.checked = true;
	}
	//user inputs for password character types
	if (lowerBox.checked === true) userPass = userPass.concat(lowercaseChar);
	if (upperBox.checked === true) userPass = userPass.concat(uppercaseChar);
	if (numberBox.checked === true) userPass = userPass.concat(numericChar);
	if (specialCharBox.checked === true) userPass = userPass.concat(specialChar);
	//loop through final array of potential characters and randomly select characters until the password length is reached
	for (let i = 0; i <= passwordLength; i++) {
		passwordNew += userPass[Math.floor(Math.random() * userPass.length)];
	}
	return passwordNew;
}

// Write password to the #password input
function writePassword() {
	let password = generatePassword();

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//checkbox validation
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

//clipboard API
const btnCopy = document.querySelector("#copy");

btnCopy.addEventListener("click", copy);

function copy() {
	navigator.clipboard.writeText(passwordText.value).then(
		function () {
			passwordText.select();
			console.log("Async: Copying to clipboard was successful!");
		},
		function (err) {
			alert("Clipboard permissions don't allow copy");
			console.error("Async: Could not copy text: ", err);
		}
	);
}

function logEvent(e) {
	console.log(e);
}
// document.body.addEventListener("click", logEvent);
