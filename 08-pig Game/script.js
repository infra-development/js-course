"use strict";

const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const currentPlayer0 = document.querySelector(".current--0");
const currentPlayer1 = document.querySelector(".current--1");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const currentScore0El = document.querySelector(".current--0");
const currentScore1El = document.querySelector(".current--1");

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
let current_score = 0;

btnRoll.addEventListener("click", function () {
  // Generate random number
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // Display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;
  // Switch player : if dice === 1
  if (dice !== 1) {
  } else {
  }
});
