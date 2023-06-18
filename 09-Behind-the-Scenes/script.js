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

console.log(this);
// const calcAge1 = function (birthyear) {
//   console.log(2037 - birthyear);
//   console.log(this);
// };
const calcAge1 = (birthyear) => {
  // Arrow function does not have own this keyword it use lexical this key word basicaly perent scope this keyword
  console.log(2037 - birthyear);
  console.log(this);
};
calcAge1(2000);

const kaushik = {
  year: 2000,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
kaushik.calcAge();

const nayana = {
  name: "nayana",
  year: 1972,
};

nayana.calcAge = kaushik.calcAge;
nayana.calcAge();
const f = kaushik.calcAge;
// f();

const kaushik1 = {
  firstName: "Kaushik",
  year: 1991,
  calcAge: function () {
    console.log(this);
    // Solution 1
    // const self = this; // self or that
    // console.log(2037 - this.year);
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.yar >= 1981 && this.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1991 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
kaushik1.greet();
kaushik1.calcAge();
// arguments keyword
const addExpr1 = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr1(2, 5);
addExpr1(2, 5, 8, 12);
var addArrow = (a, b) => {
  // console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me1 = {
  name: "Kaushik",
  age: 30,
};
const friend = me1;
friend.age = 27;
console.log("Friend", friend);
console.log("Me", me1);
