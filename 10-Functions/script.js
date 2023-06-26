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
  (flight = "LH999"), (passenger.name = "Mr." + passenger.name);

  if (passenger.passport === 23739479284) {
    alert("Checked in");
  } else {
    alert("Wrong passport!");
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
