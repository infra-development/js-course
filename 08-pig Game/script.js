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
const currentScore0El = document.getElementById("current--0");
const currentScore1El = document.getElementById("current--1");
let score, currentScore, activePlayer, teamHasWin;

const initalValues = function () {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  teamHasWin = false;
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add("hidden");
  currentScore0El.textContent = currentScore;
  currentScore1El.textContent = currentScore;
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};
initalValues();

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
  if (!teamHasWin) {
    // Generate random number
    const dice = Math.trunc(Math.random() * 6) + 1;
    // Display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;
    // Switch player : if dice === 1
    if (dice !== 1) {
      //   Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (!teamHasWin) {
    // 1. Add current score to active player's score
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    // 2. Check if player's score is >= 100
    if (score[activePlayer] >= 20) {
      // finish game
      console.log("you win");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      diceEl.classList.add("hidden");
      teamHasWin = true;
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", function () {
  initalValues();
});
