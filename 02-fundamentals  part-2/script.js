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

// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1989);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(2000, "Kaushik"));
console.log(yearsUntilRetirement(1989, "Haresh"));
