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
