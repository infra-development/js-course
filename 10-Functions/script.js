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

document.body.addEventListener("click", high5);
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
