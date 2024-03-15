const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copybtn = document.querySelector("[data-copy]");
const copyMessage = document.querySelector("[data-copyMessage]");
const uppercaseCheck = document.querySelector("[data-#uppercase]");
const lowercaseCheck = document.querySelector("[data-#lowercase]");
const numberCheck = document.querySelector("[data-#numbers]");
const symbolsCheck = document.querySelector("[data-#symbols]");
const indicator = document.querySelector("[data-data-indicator]");
const generateBtn = document.querySelector("[data-.generateButton]");
const allCheckBox = document.querySelector("input[type=checkbox]");


let password = "";
let passwordLength = "10";

let checkCount = 1;

