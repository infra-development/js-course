"use strict!";

const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // Es5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  console.log(bookings.push(booking));
};
createBooking("LH123");
createBooking("LH123", 3);
createBooking("LH123", undefined, 1000);

let flight = "LH234";
const jonas = {
  name: "Kaushik Chaudhary",
  passport: 23739479284,
};

const checkIn = function (flightNum, passenger) {
  (flightNum = "LH999"), (passenger.name = "Mr." + passenger.name);

  if (passenger.passport === 23739479284) {
    // alert("Checked in");
  } else {
    // alert("Wrong passport!");
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};
newPassport(jonas);
checkIn(flight, jonas);

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

// console.log(upperFirstWord("kaushik Bhemajibhai chaudhary"));
transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log("Hi");
};

// document.body.addEventListener("click", high5);
["Jonas", "Martha", "Adam"].forEach(high5);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet("Hey");
greeterHey("Kaushik");
greeterHey("Steven");
greet("Hello")("Kaushik");
// Challenge
const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArrow("Hi")("Kaushik");

const lufthansa = {
  airLine: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  // book:function(){}
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airLine}
flight ${this.iataCode}${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(635, "Kaushik Chaudhary");
lufthansa.book(212, "Akshat Patel");
console.log(lufthansa);

const eurowing = {
  airLine: "eurowing",
  iataCode: "EW",
  bookings: [],
};

// Call method
const book = lufthansa.book;
book.call(eurowing, 333, "Nayan patel");
console.log(eurowing);

const swiss = {
  airLine: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Mary Cooper");
console.log(swiss);

// Apply method
const flightData = [175, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// Bind
// book.call(eurowing, 23, "Sarah Williams");

const bookEW = book.bind(eurowing);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(33, "Mahesh Rathod");

const bookEW23 = book.bind(eurowing, 23);
bookEW23("Kaushik Chaudhary");
bookEW23("Martha Cooper");

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));
const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(23));
