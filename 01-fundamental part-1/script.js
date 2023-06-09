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
