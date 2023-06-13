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
// Functrion calling ather function
function cutFruitPieces(fruit) {
  return fruit * 4;
}
const fruitProcessor = function (apples, oranges) {
  const applesPieces = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applesPieces} piece of apples and ${orangesPieces} piece of Oranges.`;
  return juice;
};

console.log(fruitProcessor(2, 3));

// Reviewing Functions
const calcAge = function (birthYear) {
  return 2023 - birthYear;
};
const yearsUntilRetirement1 = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 60 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};
console.log(yearsUntilRetirement1(2000, "kaushik"));
console.log(yearsUntilRetirement1(1950, "ram"));
/*
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§
§
Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
Data 2: Dolphins score 85, 54 and 41. Koalas savgKoalascore 23, 34 and 27
Hints:
§To calculate average of 3 values, add them all together and divide by 3
§To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉*/

const score1 = 44;
const score2 = 23;
const score3 = 71;

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(score1, score2, score3));

const checkWinner = function (dolphins, koalas) {
  //   const avgDolphins = dolphins.reduce((acc, curr) => acc + curr / 3, 0);
  //   const avgKoalas = koalas.reduce((acc, curr) => acc + curr / 3, 0);
  const avgDolphins = calcAverage(...dolphins);
  const avgKoalas = calcAverage(...koalas);
  console.log(avgDolphins, avgKoalas);
  if (avgDolphins > avgKoalas * 2) {
    console.log(`Dolphins win with (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas > avgDolphins * 2) {
    console.log(`koalas win with (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No team wins`);
  }
};
// const dolphins = [44, 23, 71];
// const koalas = [65, 54, 49];
const dolphins = [85, 54, 41];
const koalas = [23, 34, 27];

checkWinner(dolphins, koalas);

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner1 = function (avgDolphins, avgKoalas) {
  if (avgDolphins > avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas > avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No team wins...`);
  }
};
checkWinner1(scoreDolphins, scoreKoalas);
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner1(scoreDolphins, scoreKoalas);
// Arrays
const friend1 = "Dharmesh";
const friend2 = "Nayan";
const friend3 = "Mitesh";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);
friends[2] = "Jay";
console.log(friends);
// friends = ["Bob", "Alice"]; // not possible

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher  ", friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge4 = function (birthYear) {
  return 2037 - birthYear;
};
const years1 = [1990, 1967, 2002, 2010, 2018];

const ages1 = calcAge4(years1[0]);
const ages2 = calcAge4(years1[1]);
const ages3 = calcAge4(years1[years1.length - 1]);
console.log(ages1, ages2, ages3);

const ages = [
  calcAge4(years1[0]),
  calcAge4(years1[1]),
  calcAge4(years1[years1.length - 1]),
];
console.log(ages);
// Basic Array Operations (Methods)
const friends1 = ["Michael", "Steven", "Peter", "harsh"];

// Add elements
const newLength = friends1.push("Jay");

console.log(friends1);
console.log(newLength);

friends1.unshift("John");
console.log(friends1);

// Remove elements
friends1.pop(); // Last
const popped = friends1.pop();
console.log(popped);
console.log(friends1);

friends1.shift(); // First
console.log(friends1);

console.log(friends1.indexOf("Steven")); // 1  // index of element
console.log(friends1.indexOf("Bob")); // -1 // not present in array so return -1

friends1.push(23);
console.log(friends1.includes("Steven")); // true
console.log(friends1.includes("Bob")); // false
console.log(friends1.includes("23")); // false  // includes is strict equality

if (friends1.includes("Steven")) {
  console.log("You have a friend called Steven");
}
/*Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) 😉*/
const bills = [125, 555, 44];
const totals2 = [];
const calcTip = function (bill) {
  // return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  let tip;
  let total;
  if (bill >= 50 && bill <= 300) {
    tip = bill * 0.15;
    total = bill + tip;
    console.log(total);
    totals2.push(total); // push method

    return tip;
  } else {
    tip = bill * 0.2;
    total = bill + tip;
    console.log(total);
    totals2.push(total);
    return bill * 0.2;
  }
};
console.log(calcTip(100)); // 15
const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[bills.length - 1]),
];
console.log(bills);
console.log(tips);
console.log(totals2);

// Introduction to Objects
const jonasArray = [
  "Jonas",
  "schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const jonas1 = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas1);

console.log(jonas1.lastName);
console.log(jonas1["lastName"]);

const nameKey = "Name";
console.log(jonas1["first" + nameKey]);
console.log(jonas1["last" + nameKey]);

// console.log(jonas1."last" + nameKey);

const interestedIn = prompt(
  `what do you want to know about jonas1? choose 
  between firstName, lastName, age, job, and friends`
);
console.log(jonas1[interestedIn]);
if (jonas1[interestedIn]) {
  console.log(jonas1[interestedIn]);
} else {
  console.log(
    `Wrong request! Choose between firstName, lastName, age, job, and friends`
  );
}

jonas1.location = "Portugal";
jonas1["twitter"] = "@jonasschmedtman";

// challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(
  `${jonas1.firstName} has ${jonas1.friends.length} friends, and his best friend is called ${jonas1.friends[0]} `
);

// Object Methods
const jonas2 = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: false,
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },
  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  }, // this keyword
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "No"} driver's license`;
  },
};

console.log(jonas2.calcAge(1991));
console.log(jonas2.age);
console.log(jonas2.age);
console.log(jonas2.age);

// Challenge
// "Jonas is a 46-year old teacher,
// and he has a driver's license"

console.log(jonas2.getSummary());

/*
Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.*/

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  fullName: "John Miller",
  mass: 92,
  height: 1.95,
  // calcBMI: function () {
  //   this.BMI = this.mass / this.height ** 2;
  //   return this.BMI;
  // },
  calcBMI: mark.calcBMI,
};
// "John's BMI (28.3) is higher than Mark's (23.9)!"
if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `${mark.fullName.split(" ")[0]}'s BMI (${
      mark.BMI
    }) is Higher then john's (${john.BMI})`
  );
} else if (john.calcBMI() > mark.calcBMI()) {
  console.log(
    `${john.fullName.split(" ")[0]}'s BMI (${
      john.BMI
    }) is Higher then john's (${mark.BMI})`
  );
}

// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");
// console.log("Lifting weights repetition 6");
// console.log("Lifting weights repetition 7");
// console.log("Lifting weights repetition 8");
// console.log("Lifting weights repetition 9");
// console.log("Lifting weights repetition 10");

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

const kaushik = [
  "Kaushik",
  "Chaudhary",
  2037 - 2000,
  "teacher",
  ["Haresh", "Naresh", "Dharmesh"],
  true,
];
const types = [];
console.log(kaushik[0]);
console.log(kaushik[1]);
// ...
console.log(kaushik[4]);
// kaushik[5]; does NOT exist

for (let i = 0; i < kaushik.length; i++) {
  // Reading from Kaushik array
  console.log(kaushik[i], typeof kaushik[i]);

  // Filling types array
  // types [i] = typeOf kaushik[i];
  types.push(typeof kaushik[i]);
}
console.log(types);

const years2 = [1991, 2007, 1969, 2020];
const ages4 = [];

for (let i = 0; i < years2.length; i++) {
  ages4.push(2037 - years2[i]);
  console.log(years2[i], ages4[i]);
}
console.log(ages4);

// continue and break
console.log("---ONLY STRINGS---");
for (let i = 0; i < kaushik.length; i++) {
  if (typeof kaushik[i] !== "string") continue;
  console.log(kaushik[i], typeof kaushik[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < kaushik.length; i++) {
  if (typeof kaushik[i] === "number") break;
  console.log(kaushik[i], typeof kaushik[i]);
}

for (let i = kaushik.length - 1; i >= 0; i--) {
  console.log(kaushik[i]);
}

for (let exercies = 1; exercies <= 5; exercies++) {
  console.log(`------ Starting Exercies  :${exercies}`);
  for (let rep = 1; rep <= 5; rep++) {
    console.log(`exercies ${exercies}: Lifting weight repetition ${rep}`);
  }
}

let rep = 1;
while (rep <= 10) {
  console.log(`rep ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
/*
Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1.
First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2.
To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3.
Call the function with the 'totals' array*/
const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tip2 = [];
const totals3 = [];
const calcTip1 = function (bill) {
  // return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  let tip = 0;
  let total = 0;
  if (bill >= 50 && bill <= 300) {
    tip = bill * 0.15;
    total = bill + tip;
    totals3.push(total); // push method
    tip2.push(tip);
  } else {
    tip = bill * 0.2;
    total = bill + tip;
    // console.log(total);
    totals3.push(total);
    tip2.push(tip);
  }
};
for (let i = 0; i < bills2.length; i++) {
  calcTip1(bills2[i]);
}
console.log(bills2);
console.log(tip2);
console.log(totals3);

const calcAverage1 = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = sum / arr.length;
  return avg;
};
console.log(calcAverage1([3, 4, 5, 6, 7]));
