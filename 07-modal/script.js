"use strict";

const modal = document.querySelector(".modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
console.log(btnsOpenModal);
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", function (e) {
    console.log(btnsOpenModal[i]);
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    console.log(e);
  });
}
const close = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnCloseModal.addEventListener("click", close);
overlay.addEventListener("click", close);

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    close();
  }
});