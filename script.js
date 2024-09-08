"use strict";

let number = Math.ceil(Math.random() * 20);
let score = document.querySelector(".score").textContent;
let highscore = document.querySelector(".highscore").textContent;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //when there is no input
  if (!guess) {
    displayMessage("⛔ NO NUMBER");

    // this when player win
  } else if (guess === number) {
    displayMessage("🎊 Correct Number!");
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = number;
    document.querySelector("body").style.backgroundColor = "#1dce44";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //when guess is wrong
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? "📈 TOO HIGH" : "📉 TOO LOW");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // when lost the game
      displayMessage("💥YOU LOST THE GAME");
      document.querySelector(".number").textContent = number;
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.ceil(Math.random() * 20);

  displayMessage("Start Guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
});
