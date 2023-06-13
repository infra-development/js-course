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
  let maxt = temp[0];
  let mint = temp[0];
  for (let i = 0; i < temp.length; i++) {
    if (typeof temp[i] !== "number") continue;
    maxt = temp[i] > maxt ? temp[i] : maxt;
    mint = temp[i] < mint ? temp[i] : mint;
  }
  console.log(mint);
  return maxt - mint;
};
// console.log(tempAmplitude(temperature, [34, 22, 33, 44]));
console.log(tempAmplitude([34, 1, 33, 44]));

// 2) Breaking up into sub-problems

// - How to ignore errors?

// --- find max value in temp array

// --- fin min from max (amplitude) and return it
/*
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§Data 1: [17, 21, 23]
§Data 2: [12, 5, -5, 0, 4]*/

// understatnd problem
// joint string with number of elemetn length in array answer + string cuarsion use for that

const printForecast = function (arr) {
  let str = " ";
  for (let day = 0; day < arr.length; day++) {
    str += `... ${arr[day]}C in ${day + 1} days `;
  }
  console.log(str + "...");
};
printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
// break it up in sub problem
