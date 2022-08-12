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

// Caching the DOM by declaring all variables
choiceButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', e => {
    const selectionName = selectionButton.dataset.selection;
    const selection = SELECTIONS.find(selection => selection.name === selectionName);
    makeChoice(selection);
  });
});

// Caching the DOM by declaring all variables
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

// Caching the DOM by declaring all variables
function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
  checkWinner();
}

// Caching the DOM by declaring all variables
function addChoiceResult(selection, winner) {
  const div = document.createElement('div');
  div.innerText = selection.emoji;
  div.classList.add('resultchoice');
  if (winner) div.classList.add('winner');
  lastColumn.after(div);
}

// Caching the DOM by declaring all variables
function Winner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name;
}

// Caching the DOM by declaring all variables
function randomChoice() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[randomIndex];
}

// Caching the DOM by declaring all variables
function nickname() {
  you.innerHTML = input.value;
  input.value = "";
  document.getElementById("start").style.visibility = "hidden";
  document.getElementById("nickname").style.visibility = "hidden";
  }

  start.addEventListener('click', nickname);

  // Caching the DOM by declaring all variables
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