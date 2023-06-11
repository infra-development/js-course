"use strict";

let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive ::D");
console.log(hasDriversLicense);
// const interface = "Audio";
// const private = 333;

// function declaration
function calcAge1(birthYear) {
  return 2023 - birthYear;
}

const age1 = calcAge1(2000);
// function expression
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};
const age2 = calcAge2(1972);
console.log(age1, age2);
