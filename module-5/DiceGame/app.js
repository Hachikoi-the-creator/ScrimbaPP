// insetad of hidding the btn, disable it, and show the rest btn
// instead of reseting and givin player 1 the turn, run the rnd func, to decide who goes first
// Add fireworks after a player wins
// Create variables for the game state
let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const message = document.getElementById("message");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", reset);

startGame();

function startGame() {
  // randomly get who starts first
  player1Turn = getRandomValue(1, 10) < 6 ? true : false;
  if (player1Turn) {
    message.textContent = "Player 1 Turn";
    player1TurnStyles();
  } else {
    player2TurnStyles();
    message.textContent = "Player 2 Turn";
  }
}

function getRandomValue(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function playerWon(playerNum, emoji) {
  message.textContent = `Player ${playerNum} Won ${emoji}`;
  resetBtn.style.display = "block";
  rollBtn.style.display = "none";
  document.querySelector(".pyro").style.display = "block";
}

function player1TurnStyles() {
  player2Dice.classList.remove("active");
  player1Dice.classList.add("active");
}

function player2TurnStyles() {
  player1Dice.classList.remove("active");
  player2Dice.classList.add("active");
}

rollBtn.addEventListener("click", () => {
  const randomNumber = getRandomValue(1, 6);

  if (player1Turn) {
    player1Score += randomNumber;
    player1Scoreboard.textContent = player1Score;
    player1Dice.textContent = randomNumber;
    message.textContent = "Player 2 Turn";
    player2TurnStyles();
  } else {
    player2Score += randomNumber;
    player2Scoreboard.textContent = player2Score;
    player2Dice.textContent = randomNumber;
    message.textContent = "Player 1 Turn";
    player1TurnStyles();
  }

  if (player1Score >= 20) {
    playerWon(1, "🥳");
  }
  if (player2Score >= 20) {
    playerWon(2, "🎉");
  }

  player1Turn = !player1Turn;
});

function reset() {
  startGame();
  player1Score = 0;
  player2Score = 0;
  player1Scoreboard.textContent = 0;
  player2Scoreboard.textContent = 0;
  player1Dice.textContent = "-";
  player2Dice.textContent = "-";
  resetBtn.style.display = "none";
  rollBtn.style.display = "block";
  document.querySelector(".pyro").style.display = "";
}
