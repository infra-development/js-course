"use strict";
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Bread", "Caprese Salad"],
  starterMenu: ["Foccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  //   Es6 enhanced object literals
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 2, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1} : ${el}`);
}
// console.log([...menu.entries()]);

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.open);

// console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours.mon?.open);

// Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? "close";
  console.log(`On ${day}, we open at ${open}`);
}

// Method
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

// Arrays
const users = [{ name: "Kaushik", email: "hello@kaushik.io" }];
// const users = [];
console.log(users[0]?.name ?? "User array empty");

if (users.length > 0) console.log(users[0].name);
else console.log("user array empty");
//  Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are oopen on ${properties.length} days:`;
for (const day of Object.keys(openingHours)) {
  openStr += ` ${day}`;
}
console.log(openStr);
// Property VALUES
const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

/*
Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}*/
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}
let avgOfOdd = 0;
const oddArray = Object.values(game.odds);
for (const odd of oddArray) avgOfOdd += odd / oddArray.length;
console.log(avgOfOdd);

for (const [key, value] of Object.entries(game.odds)) {
  const str = key === "x" ? "draw" : `victory ${game[key]}`;
  console.log(`Odd of ${str}: ${value}`);
}
/*
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}*/
const scorer = {};
const scored = ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"];
for (const plalyer of scored) {
  scorer[plalyer] ? scorer[plalyer]++ : (scorer[plalyer] = 1);
}
console.log(scorer);
// Sets
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(ordersSet);

console.log(new Set("Kaushik"));

console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("pizza"));
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
ordersSet.delete("Risotto");
console.log(ordersSet);
for (const order of ordersSet) console.log(order);
// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(staff).size); // if we only want to know how many unique value in it.
console.log(new Set("kaushikchaudhary").size);

// Maps
const rest = new Map();
rest.set("name", "classico Italiano");
rest.set(1, "Firenze, Italy");
rest.set(2, "lisbon, Portugal");
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "we arae open :D")
  .set(false, "We are cloosed :(");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time < rest.get("close") && time > rest.get("open")));

console.log(rest.has("categories"));
console.log(rest.delete(2));
// rest.clear();

const arr = [1, 2];
rest.set(arr, "Test");
console.log(rest.get(arr));
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
console.log(rest.size);

const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "c"],
  [2, "Java"],
  [3, "javaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try again!"],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt(`Your answer`));
const answer = 3;
console.log(answer);
console.log(question.get(answer === question.get("correct")));

// Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

/*
Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
⚽
[FIRST HALF] 17:
GOAL
GOOD LUCK 😀*/
const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);
// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);
// 2.
console.log(gameEvents.delete(69));
// 3.
const time1 = [...gameEvents.keys()];
console.log(time1[time1.length - 1]);
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
// 4.
for (const [min, event] of gameEvents) {
  const half = min < 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min}: ${event}`);
}

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("portugal"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle seat");
  else console.log("You got lucky");
};
checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");
// Behind the scene js automatically convert to primitive type to object
console.log(new String("kaushik"));
console.log(typeof new String("Kaushik"));
console.log(typeof new String("Kaushik").slice(1));
console.log(new String("Kaushik").slice(1));

// part-2 string
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = "jOnAS"; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = "hello@jonas.io";
const loginEmail = " Hello@Jonas.Io \n";
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = "288,97€";
const priceUS = priceGB.replace("€", "$");
console.log(priceGB);
console.log(priceUS);

const announcement = "All passengers to boarding door 23. Boarding door 23!";
// console.log(announcement.replace("door", "gate"));
// console.log(announcement.replaceAll("door", "gate"));
console.log(announcement.replace(/door/g, "gate"));

// Booleans
const plane1 = "Airbus A320neo";
console.log(plane1.includes("A320"));
console.log(plane1.includes("Boeing"));
console.log(plane1.startsWith("Airb"));
// console.log(plane1.endsWith("s A320neo"));

if (plane1.startsWith("Airbus") && plane1.endsWith("neo")) {
  console.log("Part of the NEW ARirbus family");
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("gun") || baggage.includes("knife")) {
    console.log("You are NOT allowed on board");
  } else {
    console.log("Welcome aboard!");
  }
};
checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");
// part-3 string
console.log("a+very+nice+string".split("+"));
console.log("Kaushik Chaudhary".split(" "));
const [firstName, lastName] = "Kaushik Chaudhary".split(" ");

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);
const capitalizeName = function (name) {
  name.toLowerCase();
  const names = [];
  for (const n of name.split(" ")) {
    // names.push(n.slice(0, 1).toUpperCase() + n.slice(1));
    names.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(names.join(" "));
  // type 3
  // let str = "";
  // for (const cap of name.split(" ")) {
  //   // cap.slic
  //   str += cap.slice(0, 1).toUpperCase() + cap.slice(1) + " ";
  // }
  // console.log(str);
};
capitalizeName("kaushik chaudhary");
capitalizeName("kaushik bhemajibhai chaudhary");

// padding
const message = "Go to gate 23!";
console.log(message.padStart("25", "+").padEnd(30, "*"));
console.log("Kaushik".padStart("25", "+").padEnd(30, "*"));

const maskCreditCard = function (number) {
  const str = number + "";
  // console.log(typeof str);
  console
    .log
    // str.replace(str.slice(0, str.length - 4), "*".repeat(str.length - 4))
    ();
  const last = str.slice(-4);
  console.log(last.padStart(str.length, "*"));
};
maskCreditCard(1736288877973489);
maskCreditCard(9427565176);

// Repeat
const message2 = "Bad waether... All Departues Delayed...";
console.log(message2);

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"✈️".repeat(n)}`);
};
planesInLine(5);
planesInLine(2);
planesInLine(12);
/*
Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
 
Should produce this output (5 separate console.log outputs):
underscoreCase
firstName✅
✅✅
someVariable
calculateAge✅✅✅
✅✅✅✅
delayedDeparture✅✅✅✅✅
✅✅✅✅
delayedDeparture✅✅✅✅✅
Hints:
§Remember which character defines a new line in the textarea 😉
§The solution only needs to work for a variable made out of 2 words, like a_b
§Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§
This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!*/

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

// document.querySelector("button").addEventListener("click", function () {
//   const inputValue = document.querySelector("textarea").value;
//   console.log("Hi " + inputValue);
//   const str = inputValue;

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});
//   const lowerTrim = str.trim().toLowerCase();
//   const nArr = lowerTrim.split("\n");
//   console.log(nArr);
//   let c = 1;
//   for (const m of nArr) {
//     const n = m.split("_");
//     let firstWord = n[0];
//     for (let i = 1; i < n.length; i++) {
//       firstWord += n[i][0].toUpperCase() + n[i].slice(1);
//     }
//     console.log(firstWord.padEnd(20, " ") + "✅".repeat(c));
//     c++;
//     // for (const camel of nArr) {
//     //   const i = camel.indexOf("_");
//     //   const newStr = camel.replaceAll("_", "");
//     //   console.log(
//     //     newStr.slice(0, i) + newStr[i].toUpperCase() + newStr.slice(i + 1)
//     //   );
//   }
// });
