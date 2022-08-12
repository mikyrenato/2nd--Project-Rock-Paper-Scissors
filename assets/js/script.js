// Caching the DOM by declaring all variables
const choiceButtons = document.querySelectorAll('[data-selection]');
const lastColumn = document.querySelector('[data-final-column]');
const computerResult = document.querySelector('[data-computer-score]');
const yourResult = document.querySelector('[data-your-score]');
const input = document.getElementById('nickname');
const start = document.getElementById('start');
const you = document.getElementById('nick');
const y = document.getElementById('y');
const o = document.getElementById('o');
const SELECTIONS = [
  {
    name: 'rock',
    emoji: '✊',
    beats: 'scissors'
  },
  {
    name: 'paper',
    emoji: '✋',
    beats: 'rock'
  },
  {
    name: 'scissors',
    emoji: '✌',
    beats: 'paper'
  }
];

// Function to give us the choice name on click plus making a choice by using the makeChoice function
choiceButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', e => {
    const selectionName = selectionButton.dataset.selection;
    const selection = SELECTIONS.find(selection => selection.name === selectionName);
    makeChoice(selection);
  });
});

// Making the choice function
function makeChoice(selection) {
  const computerSelection = randomChoice();
  const yourWinner = Winner(selection, computerSelection);
  const computerWinner = Winner(computerSelection, selection);

  addChoiceResult(computerSelection, computerWinner);
  addChoiceResult(selection, yourWinner);

  if (yourWinner) incrementScore(yourResult);
  if (computerWinner) incrementScore(computerResult);

  y.innerHTML = selection.emoji;
  o.innerHTML = computerSelection.emoji;

}

// Function to increase the score of the winner
function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
  checkWinner();
}

// Adding the results history on the bottom of the page
function addChoiceResult(selection, winner) {
  const div = document.createElement('div');
  div.innerText = selection.emoji;
  div.classList.add('resultchoice');
  if (winner) div.classList.add('winner');
  lastColumn.after(div);
}

// Function to help determining who the winner is
function Winner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name;
}

// This function will help to make a random computer choice
function randomChoice() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[randomIndex];
}

// This function is to set up the nickname
function nickname() {
  you.innerHTML = input.value;
  input.value = "";
  document.getElementById("start").style.visibility = "hidden";
  document.getElementById("nickname").style.visibility = "hidden";
  }

  start.addEventListener('click', nickname);

  // This function is to alert the user if they won or lost the game
function checkWinner() {
  let computerResult = document.querySelector('[data-computer-score]').innerHTML;
  let yourResult = document.querySelector('[data-your-score]').innerHTML;
  if (computerResult >= 10) {
    alert(":( You lost, better luck next time.");
    location.reload();
  }
  else if (yourResult >= 10) {
    alert("Great job, you are the winner :) !!");
    location.reload();
  }
  else
  return false;
}