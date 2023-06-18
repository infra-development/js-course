"use strict";

function calcAge(birthyear) {
  const age = 2037 - birthyear;
  console.log(firstName);
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthyear}`;
    console.log(output);

    if (birthyear >= 1991 && birthyear <= 1996) {
      var millenial = true;
      //   Creating NEW variable with same name as outer scope's variable
      const firstName = "Haresh";

      //   Reassigning outer scope's variable
      output = "NEW OUTPUT!";
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    console.log(output);
  }
  printAge();
  return age;
}
const firstName = "Kaushik";
calcAge(2000);

console.log(me);
// console.log(job);
// console.log(year);

var me = "Kuashik";
let job = "teacher";
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
var addArrow = (a, b) => {
  return a + b;
};

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();
var numProducts = 10;
function deleteShoppingCart() {
  console.log("All products deleted!");
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
