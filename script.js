"use strict";

let number = Math.ceil(Math.random() * 20);
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  number = Math.ceil(Math.random() * 20);
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = 20;
});
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  let score = document.querySelector(".score").textContent;
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ NO NUMBER";
  } else {
    if (score > 1) {
      if (guess === number) {
        // this when player win
        document.querySelector(".number").style.width = "30rem";
        document.querySelector("body").style.backgroundColor = "#1dce44";
        document.querySelector(".message").textContent = "🎊 Correct Number!";
        document.querySelector(".number").textContent = number;
        if (score > document.querySelector(".highscore").textContent)
          document.querySelector(".highscore").textContent =
            document.querySelector(".score").textContent;
      } else if (guess > number) {
        // when guess too high
        document.querySelector(".message").textContent = "📈 TOO HIGH";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        //when guess too low
        document.querySelector(".message").textContent = "📉 TOO LOW";
        score--;
        document.querySelector(".score").textContent = score;
      }
    } else {
      // when lost the game
      document.querySelector(".message").textContent = "💥YOU LOST THE GAME";
      document.querySelector(".number").textContent = number;
    }
  }
});
