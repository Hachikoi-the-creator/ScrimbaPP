function getDiceRollArray(diceCount) {
  return new Array(diceCount)
    .fill(0)
    .map(() => Math.floor(Math.random() * 6) + 1);
}

function getPercentage(remainingHealth, maximumHealth) {
  return (100 * remainingHealth) / maximumHealth;
}

function getDicePlaceholderHtml(diceCount) {
  return new Array(diceCount)
    .fill(0)
    .map(() => `<div class="placeholder-dice"></div>`)
    .join("");
}

export { getDiceRollArray, getDicePlaceholderHtml, getPercentage };
