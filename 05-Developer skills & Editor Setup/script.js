// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// PROBLEM:
// We work for a company building a smart home thermometer. Our most recent task is this:
// "Given an array of temperatures of one day, calculate the temperature amlitude.
// keep in mind that sometimes there might be a sensor error."

const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// what is temperature amplitude answer: difference between max and min value
//  - How to compute max and min temperatures
//  - Whhat's a sensor error? And what do do?

const tempAmplitude = function (arr1, arr2) {
  const temp = arr1.concat(arr2);
  let maxt = 0;
  let mint = 0;
  for (let i = 0; i < temp.length; i++) {
    if (typeof temp[i] === "string") continue;
    maxt = temp[i] > maxt ? temp[i] : maxt;
    mint = temp[i] < mint ? temp[i] : mint;
  }
  return maxt - mint;
};
console.log(tempAmplitude(temperature, [34, 22, 33, 44]));

// 2) Breaking up into sub-problems

// - How to ignore errors?

// --- find max value in temp array

// --- fin min from max (amplitude) and return it
