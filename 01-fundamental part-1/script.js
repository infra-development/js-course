// values and variable
let js = "amazing";
console.log(40 + 8 + 23 - 10);
console.log("kaushik");
console.log(23);

// this are some convention have to write code
let firstName = "kaushik";
let first = "haresh";
let firstNamePerson;
let first_name_person;

console.log(firstName);
console.log(firstName);
console.log(firstName);

// let 3years = 3; // Error: unvalid token
// variable name can't start with numbers

let job1 = "Programmer";
let job2 = "teacher";

// this set of variable more readable
let myFirstJob = "Programmer";
let myCurrentJob = "teacher";

// Data types in javascript
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "kaushik");

javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

console.log(typeof null);

// let ,const and var
let age = 23;
age = 24;

const birthdate = 2000;
// birthdate = 1999; // const variable are immutable
// const job;   // we can't writhe without assigning value

var job = "programmer";
job = "teacher";

lastName = "Chaudhary";
console.log(lastName);

// Math Operator
const now = 2023;
const ageHaresh = now - 1989;
const agejanmejay = now - 2015;
console.log(ageHaresh, agejanmejay);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const fName = "jaydev";
const lName = "Bhuriay";
console.log(fName + " " + lName);

// Assignment operator
let x = 10 + 5;
console.log(x);
x += 10; // 25
x -= 4; // 21
x++; //  x = x + 1
x--; // x = x -1

// Comparison operators
console.log(ageHaresh > agejanmejay);
console.log(agejanmejay >= 18);
const isFullAge = agejanmejay >= 18;
console.log(now - 1989 > now - 2015);

// Operator Precedence
let z, y;
z = y = 25 - 10 - 5; // z = y = 10, z = 10
console.log(z, y);

const averageAge = (ageHaresh + agejanmejay) / 2;
console.log(ageHaresh, agejanmejay, averageAge);
/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.*/

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;
const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const markBmi = markMass / markHeight ** 2;
const johnBmi = johnMass / johnHeight ** 2;

const markHigherBMI = markBmi > johnBmi;
console.log(markBmi, johnBmi, markHigherBMI);

const first_name = "Narendr";
const jobs = "teacher";
const birthyear = 1991;
const years = 2023;

const kaushik =
  "I'm " +
  first_name +
  ", a " +
  (years - birthyear) +
  " years old " +
  job +
  "!";
console.log(kaushik);

const kaushikNew = `I'm ${firstName}, a ${years - birthyear} year old ${job}!`;
console.log(kaushikNew);
console.log(`Just a regulat string...`);
console.log(`String
multiple
lines`);

// Control structure / Taking decision if else statements
const age1 = 12;
const isOldEnough = age1 >= 18;

if (isOldEnough) {
  console.log("Sarah can start driving licence");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years.   `);
}

const birthyear1 = 2012;
let century;
if (birthyear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉*/
// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;
const markMass1 = 95;
const markHeight1 = 1.88;
const johnMass1 = 85;
const johnHeight1 = 1.76;

const markBmi1 = markMass / markHeight ** 2;
const johnBmi1 = johnMass / johnHeight ** 2;

if (markBmi > johnBmi) {
  console.log(`Mark's BMI (${markBmi1})is higher than John's! (${johnBmi1})`);
} else {
  console.log(`John's BMI (${johnBmi1})is higher than Mark's! (${markBmi1})`);
}
// Type conversion and Coercion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Kaushik"));
console.log(typeof NaN);
console.log(String(23));
console.log(typeof inputYear);

// type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");
console.log("23" > "18");

let n = "1" + 1; // 11
n = n - 1;
console.log(n);
//Truthy and falsy Values
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("kaushik"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
// Equality Operators == vs. ===
const age2 = 18;
if (age2 === 18) console.log("You just became an adult:D (strict)");
if (age2 == 18) console.log("You just became an adult:D (loose)");

// const favourite = Number(prompt("what's your favourite number?"));
const favourite = 3;
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}
if (favourite !== 23) console.log("why not 23?");
// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }
const isTired = true; // C
console.log(hasDriversLicense && hasGoodVision && isTired);
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106*/

// const dolphins = (96 + 108 + 89) / 3;    // test data 1
// const koalas = (88 + 91 + 110) / 3;
// const dolphins = (97 + 112 + 101) / 3;   // bonus data 1
// const koalas = (109 + 95 + 123) / 3;
const dolphins = (97 + 112 + 101) / 3; // bonus data 2
const koalas = (109 + 95 + 106) / 3;
console.log(`dolphins :${dolphins}
koalas :${koalas}`);
if (dolphins > koalas && dolphins >= 100) {
  console.log(`winner is Dolpins ${dolphins}`);
} else if (koalas > dolphins && koalas >= 100) {
  console.log(`winner is koalas ${koalas} `);
} else if (dolphins === koalas) {
  console.log(`both are have same average score ${dolphins}`);
} else {
  console.log(`No one wins`);
}
// The swithc statement
const day = "Wednesday";

// switch (day) {
//   case "Monday":
//     console.log("writing 500 code");
//     break;
//   case "Tuesday":
//     console.log("writing 500 lines code");
//     console.log("reading 5 English articals and analysing");
//      break;
//   case "Wednesday":
//     console.log("codding challenges");
//     break;
//   case "Saturday":
//   case "Sunday":
//     console.log("Enjoying weekends");
//     break;
//   default:
//     console.log("Not a valid input");
// }

if (day === "Monday") {
  console.log("writing 500 code");
} else if (day === "Tuesday") {
  console.log("writing 500 lines code");
  console.log("reading 5 English articals and analysing");
} else if (day === "Wednesday") {
  console.log("codding challenges");
} else if (day === "Saturday" || day === "Sunday") {
  console.log("Enjoying weekends");
} else {
  console.log("Not a valid input");
}

// Statements and Expressions
3 + 4;
1991;
true && false && !false;

if (23 > 10) {
  const str = "23 is bigger";
}

const me = "kaushik";
console.log(`I'm ${2037 - 1991} years old ${me}`);
