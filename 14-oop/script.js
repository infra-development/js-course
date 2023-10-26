'use strict';

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    // Never do this
    // this.calcAge = function () {
    //     console.log(2037-birthYear);
    // }
};

const kaushik = new Person('Kaushik', 2000);
console.log(kaushik);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const manish = new Person('Manish', 1998);
const haresh = new Person('Haresh', 1989);
console.log(manish, haresh);

console.log(manish instanceof Person);