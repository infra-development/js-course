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
    // Instence Method
    // Method will be added to .prototype property
    calcAge() {
        console.log(2023 - this.birthYear);
    }

    greet() {
        console.log(`hey ${this.firstName}.`);
    }

    // Setter and getter method
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

    // static method
    static hey = function () {
        console.log(this);
        console.log("hey there");
    }
}
const piyush = new PersonCl('Piyush patel', 1995);

const krishna = new PersonCl('Krishna chaudhary', 1998);
console.log(krishna.age);

PersonCl.hey();
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

const PersonProto = {
    calcAge() {
        console.log(2023 - this.birthYear);
        this.age = 2023 - this.birthYear;
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);
// steven.firstName = 'Steven';
// steven.birthYear = 2001;
steven.init('Steven', 1992);
console.log(steven);
steven.calcAge();

console.log(PersonProto === steven.__proto__);

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 2002);
sarah.calcAge();
console.log(sarah);

// Coding Challenge #2
// Your tasks:
// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
// by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
// converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.
// Test data:
// §
// Data car 1: 'Ford' going at 120 km/h
// GOOD LUCK 😀

class CarCl{
    constructor(make,speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate = function () {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed}`);
    };

    brake = function () {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed}`);
    };
    
    get speedUS() {
        return (this.speed / 1.6);
    }

    set speedUS(speed) {
         this.speed = speed * 1.6;
    }
}

const ford = new CarCl("Ford", 120);
ford.speedUS = ford.speedUS;
console.log("ford",ford);
console.log(ford.speedUS);

ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;

const PersonCon = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

PersonCon.prototype.calcAge = function () {
    console.log(2023 - this.birthYear);
}
const Student = function (firstName, birthYear, course) {
    PersonCon.call(this,firstName, birthYear);
    this.course = course;
}
// Link prototype
Student.prototype = Object.create(PersonCon.prototype);
Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}
const jay = new Student('Jay Patel', 1996, 'BCA');
jay.introduce();

console.log(jay.__proto__);
console.log(jay.__proto__.__proto__);

console.log(jay instanceof Student);
console.log(jay instanceof PersonCon);
console.log(jay instanceof Object);

jay.calcAge();
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

// Coding Challenge #3
// Your tasks:
// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
// current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
// km/h, with a charge of 22%'
// 4. Create an electric car object and experiment with calling 'accelerate',
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// you 'accelerate'! Hint: Review the definiton of polymorphism 😉
// Test data:
// §
// Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
// GOOD LUCK 😀

const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
    console.log(`${this.make} going at speed of ${this.speed}km/h, with charge of ${this.charge}%.`);
};

EV.prototype = Object.create(Car.prototype); 
EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} going at ${this.speed}Km/h, with charge of ${this.charge}.`);
}

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);

class studentCl extends PersonCl{
    constructor(firstName,birthYear,course) {
        super(firstName, birthYear)
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.firstName} I'm ${this.age} and I study ${this.course}`);
    }

    calcAge() {
        console.log(`I'm ${2023 - this.birthYear} years old, but as a student I feel more like ${2023 - this.birthYear + 10}`);
    }
}

const navin = new studentCl("Navin Maheshwari", 2002, 'JavaScript');
console.log(navin);
navin.introduce();
navin.calcAge();

const PersonProtoN = {
    calcAge() {
         console.log(2023 - this.birthYear);
    },
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const StudentProto = Object.create(PersonProtoN);
StudentProto.init = function (firstName, birthYear, course) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    this.course = course;
};

console.log(StudentProto.__proto__);
StudentProto.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const hardik = Object.create(StudentProto);
hardik.init("Hardik", 1998,'BCA');
console.log(hardik);
hardik.calcAge();
hardik.introduce();