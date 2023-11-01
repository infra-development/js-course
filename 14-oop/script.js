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

console.log(kaushik.__proto__);
console.log(kaushik.__proto__.__proto__);
console.log(kaushik.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9];  // new Array === []
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
    return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

// Coding Challenge #1
// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them
// Test data:
// §
// §
// Data car 1: 'BMW' going at 120 km/h
// Data car 2: 'Mercedes' going at 95 km/h
// GOOD LUCK 😀

const Car = function (make, speed) {
    this.speed = speed;
    this.make = make;
}

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}`);
};
Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}`);
};
const bmw = new Car('BMW',120);
const mercedes = new Car('MERCEDES', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();


class PersonCl {
    constructor(firstName, birthYear) {
        this.fullName = firstName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2023 - this.birthYear);
    }

    greet() {
        console.log(`hey ${this.firstName}.`);
    }

    get age() {
        return 2023 - this.birthYear;
    }

    // Set a property that already exists
    set fullName(name) {
        console.log(name);
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full Name`)
    }

    get fullName() {
        return this._fullName;
    }
}
const piyush = new PersonCl('Piyush patel', 1995);

const krishna = new PersonCl('Krishna chaudhary', 1998);
console.log(krishna.age);
console.log('//////////');
// krishna.fullName = 'krishna chaudhary';

// PersonCl.prototype.greet = function () {
    //     console.log(`hey ${this.firstName}.`);
// }

console.log(krishna.__proto__ === PersonCl.prototype);
console.log(krishna);
krishna.calcAge();
krishna.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizes
// 3. Classes are executed in strict mode

const account = {
    owner: "Kaushik",
    movements: [200, 350, 322, 530, 299],
    get letest() {
        return this.movements.slice().pop();
    },

    set letest(mov) {
        this.movements.push(mov);
    }
}

console.log(account.letest);
account.letest = 399;
console.log(account.movements);
