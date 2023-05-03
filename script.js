"use strict";

//assignments
let secretNumber = Math.trunc(Math.random() * 21);
let userchance = 20;
let userHighScore = 0;
// selecting from DOM
let userGuess = document.querySelector(".myInput");
let checkBtn = document.querySelector(".check");
let againBtn = document.querySelector(".again");
let box = document.querySelector(".box");
let message = document.querySelector(".message");
let chance = document.querySelector(".DomChance");
let score = document.querySelector(".DomScore");
//check button
checkBtn.addEventListener("click", () => {
  if (userchance > 1) {
    if (!userGuess.value) {
      message.textContent = "Enter a number!!";
    } else {
      if (userGuess.value == secretNumber) {
        message.textContent = "yay correct :D";
        userchance = userchance - 1;
        userGuess.value = "";
        document.querySelector("body").style.backgroundColor =
          "rgb(105, 156, 28)";
        chance.textContent = userchance;
        box.textContent = secretNumber;
        if (userchance > userHighScore) {
          userHighScore = userchance;
          score.textContent = userHighScore;
        }
      } else if (userGuess.value !== secretNumber) {
        userGuess.value > secretNumber
          ? (message.textContent = "Too high!")
          : (message.textContent = "Too low!");
        userchance = userchance - 1;
        userGuess.value = "";
        chance.textContent = userchance;
      }
    }
  } else {
    message.textContent = "you lost the game :(";
    chance.textContent = "0";
    document.querySelector("body").style.backgroundColor = "rgb(233, 36, 36)";
    userGuess.value = "";
  }
});
// again button
againBtn.addEventListener("click", () => {
  userchance = 20;
  message.textContent = "Guessing...";
  chance.textContent = userchance;
  document.querySelector("body").style.backgroundColor = "#565353";
  secretNumber = Math.trunc(Math.random() * 21);
  box.textContent = secretNumber;
  box.textContent = "?";
});
