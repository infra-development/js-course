'use strict';

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    // Never do this
    // this.calcAge = function () {
    //     console.log(2037- this.birthYear);
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

Person.prototype.calcAge = function () {
    console.log(2023 - this.birthYear);
};

haresh.calcAge();
manish.calcAge();

console.log(haresh.__proto__);
console.log(manish.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(haresh));
console.log(Person.prototype.isPrototypeOf(kaushik));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(kaushik.species , manish.species);

console.log(kaushik.hasOwnProperty('firstName'));
console.log(kaushik.hasOwnProperty('species'));
