"use strict";

// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// Display Moments
const displayMovements = function (movements) {
  containerMovements.innerHTML = "";
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
     <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// Display Balance
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = acc.balance + " EUR";
};

// Display Summary
const calcDisplaySummary = function (acc) {
  console.log(acc);
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = incomes;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = Math.abs(out);

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((mov) => (mov * acc.interestRate) / 100)
    .filter((int) => {
      if (int > 1) return int;
    })
    .reduce((accu, int) => accu + int, 0);
  labelSumInterest.textContent = interest;
};
// creating username for each user account
const createUsername = function (accs) {
  accs.forEach(
    (acc) =>
      (acc.userName = acc.owner
        .toLowerCase()
        .split(" ")
        .map((str) => str[0])
        .join(""))
  );
};
// accounts.forEach((acc) => (acc.userName = createUsername(acc.owner)));
createUsername(accounts);
// Update UI and Display
const updateUI = function (acc) {
  //Calculate Balance and Display Balance
  calcDisplayBalance(acc);
  //Calculate Summary and Display Summary
  calcDisplaySummary(acc);
  //Display Movements
  displayMovements(acc.movements);
};
let currentUser;

// User login callback function
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  currentUser = accounts.find(
    (acc) => acc.userName === inputLoginUsername.value
  );
  console.log(currentUser);
  if (currentUser?.pin === Number(inputLoginPin.value)) {
    // Display UI and Welcome message
    containerApp.style.opacity = 100;
    labelWelcome.textContent = `Wellcome back, ${
      currentUser.owner.split(" ")[0]
    }`;
    // Update UI and Display
    updateUI(currentUser);
  }
  // Clear Input field
  inputLoginUsername.value = inputLoginPin.value = "";
  inputLoginUsername.blur();
  inputLoginPin.blur();
});

// Transfer Amount callback function
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    (acc) => acc.userName === inputTransferTo.value
  );
  console.log(receiverAccount);
  if (
    amount > 0 &&
    receiverAccount?.userName !== currentUser.userName &&
    amount <= currentUser.balance
  ) {
    currentUser.movements.push(-amount);
    receiverAccount.movements.push(amount);
  }
  // Clear Input field
  inputTransferTo.value = inputTransferAmount.value = "";
  inputTransferTo.blur();
  inputTransferAmount.blur();
  // Update UI and Display
  updateUI(currentUser);
});

// Close account callback function
btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    currentUser.userName === inputCloseUsername.value &&
    Number(inputClosePin.value) === currentUser.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.userName === currentUser.userName
    );
    accounts.splice(index, 1);

    // Log out current-user
    containerApp.style.opacity = 0;
  }
  // Clear Input field
  inputCloseUsername.value = inputClosePin.value = "";
  inputCloseUsername.blur();
  inputClosePin.blur();
});

// Request Loan
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const loanRequestAmount = Number(inputLoanAmount.value);

  if (
    loanRequestAmount > 0 &&
    currentUser.movements.some((value) => value >= loanRequestAmount * 0.1)
  ) {
    currentUser.movements.push(loanRequestAmount);

    // Update UI
    updateUI(currentUser);
  }
  // clear input field
  inputLoanAmount.value = "";
  inputLoanAmount.blur();
});

// Simply Array Methods
let arr = ["a", "b", "c", "d", "e"];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice());

// SPLICE
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(" - "));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}:You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}:You withdrew ${Math.abs(movement)}`);
  }
}
console.log("--------forEach---------");
movements.forEach(function (movement, i, array) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}:You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}:You withdrew ${Math.abs(movement)}`);
  }
});
// 0: function(200)
// 1: function(200)
// 2: function(200)
// ...

// Maps
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
/*
Coding Challenge #1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog
🐶 number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
")
4. Run the function for both test datasets
Test data:
§Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far 😉*/

function checkDogs(dogsJulia, dogsKate) {
  const juliaCorrected = [...dogsJulia];
  juliaCorrected.splice(-2, 2);
  juliaCorrected.splice(0, 1);

  const dogs = juliaCorrected.concat(dogsKate);
  dogs.forEach(function (age, i) {
    console.log(
      age < 3
        ? `Dog number ${i + 1} is still a puppy`
        : `Dog🐶 number ${i + 1} is an adult, and is ${age} years old`
    );
  });
}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

const eurToUsd = 1.1;
// const movementsUSD1 = movements.map(function (mov) {
//   return mov * eurToUsd;
// });
// console.log(movementsUSD1);

const movementsUSD = movements.map((mov) => mov * eurToUsd);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log("movements for:", movementsUSDfor);

const movementsDescriptions = movements.map((mov, i, arr) => {
  // if (mov < 0) {
  //   return `Movement ${i + 1}: You withdraw ${Math.abs(mov)}`;
  // } else {
  //   return `Movement ${i + 1}: You deposited ${mov}`;
  // }
  return `Movement ${i + 1}: You ${
    mov < 0 ? "withdraw" : "deposited"
  } ${Math.abs(mov)} `;
});
console.log(movementsDescriptions.join("\n"));

const deposit = movements.filter((mov) => mov > 0);
console.log(movements);
console.log(deposit);
const depositFor = [];
for (const mov of movements) if (mov > 0) depositFor.push(mov);
console.log(depositFor);

const withdrawal = movements.filter((mov) => mov < 0);
console.log(withdrawal);

// Reduce Method
const balance = movements.reduce((acc, mov, i, arr) => acc + mov, 0);
let balanceFor = 0;
for (const mov of movements) {
  balanceFor += mov;
}
console.log(balanceFor);
console.log(balance);

const maxValue = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(movements);
console.log(maxValue);

/*
Coding Challenge #2
Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
Test data:
§Data 1: [5, 2, 4, 1, 15, 8, 3]
§Data 2: [16, 6, 10, 5, 6, 1, 4]*/

const calcAverageHumanAge = function (dogAges) {
  const humanAges = dogAges.map((dogAge, i, arr) => {
    if (dogAge <= 2) return 2 * dogAge;
    else if (dogAge > 2) return 16 + dogAge * 4;
  });
  console.log(humanAges);
  const adultDogs = humanAges.filter((age) => age > 18);
  console.log("adultDogs", adultDogs);
  const avgHumanAge = adultDogs.reduce(
    (acc, curr, i, arr) => acc + curr / arr.length,
    0
  );
  return avgHumanAge;
};
console.log([5, 2, 4, 1, 15, 8, 3]);
const age1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const age2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(age1, age2);

const eurToUsd2 = 1.1;
// PIPLINE
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUsd2;
  })
  // .map(mov => mov * eurToUsd2)
  .reduce((acc, usd) => acc + usd, 0);
console.log(Math.trunc(totalDepositsUSD));

/*
Coding Challenge #3
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!
Test data:
§Data 1: [5, 2, 4, 1, 15, 8, 3]
§Data 2: [16, 6, 10, 5, 6, 1, 4]*/

const calcAverageHumanAgeArrow = (dogAges) =>
  dogAges
    .map((age, i, arr) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age > 18)
    .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);
const age3 = calcAverageHumanAgeArrow([5, 2, 4, 1, 15, 8, 3]);
const age4 = calcAverageHumanAgeArrow([16, 6, 10, 5, 6, 1, 4]);
console.log(age3, age4);

const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(movements);
console.log(firstWithdrawal);
console.log(accounts);

const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account);

for (const acc of accounts) {
  if (acc.owner === "Jessica Davis") console.log(acc);
}

// Equality
console.log(movements.includes(-130));

// Some: CONDITION
console.log(movements.some((mov) => mov === -130));

const anyDeposits = movements.some((mov) => mov > 0);
console.log(anyDeposits);

// every
console.log(movements.every((mov) => mov > 0));
console.log(account4.movements.every((mov) => mov > 0));

// Seprate callback function
const deposit2 = (mov) => mov > 0;
console.log(movements.some(deposit2));
console.log(movements.every(deposit2));
console.log(movements.filter(deposit2));
