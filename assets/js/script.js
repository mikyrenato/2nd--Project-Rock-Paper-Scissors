const choiceButtons = document.querySelectorAll('[data-selection]')
const lastColumn = document.querySelector('[data-final-column]')
const computerResult = document.querySelector('[data-computer-score]')
const yourResult = document.querySelector('[data-your-score]')
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
]

choiceButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', e => {
    const selectionName = selectionButton.dataset.selection
    const selection = SELECTIONS.find(selection => selection.name === selectionName)
    makeChoice(selection)
  })
})

function makeChoice(selection) {
  const computerSelection = randomChoice()
  const yourWinner = Winner(selection, computerSelection)
  const computerWinner = Winner(computerSelection, selection)

  addChoiceResult(computerSelection, computerWinner)
  addChoiceResult(selection, yourWinner)

  if (yourWinner) incrementScore(yourResult)
  if (computerWinner) incrementScore(computerResult)
}

function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addChoiceResult(selection, winner) {
  const div = document.createElement('div')
  div.innerText = selection.emoji
  div.classList.add('result-selection')
  if (winner) div.classList.add('winner')
  lastColumn.after(div)
}

function Winner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name
}

function randomChoice() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
  return SELECTIONS[randomIndex]
}