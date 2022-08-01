const choiceButtons = document.querySelectorAll('[data-selection]')
const LastColumn = document.querySelector('[data-final-column]')
const computerScore = document.querySelector('[data-computer-score]')
const yourScore = document.querySelector('[data-your-score]')
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

choiceButtons.forEach(choiceButton => {
    choiceButton.addEventListener('click', e => {
      const selectionName = choiceButton.dataset.selection
      const selection = SELECTIONS.find(selection => selection.name === selectionName)
      makeSelection(selection)
    })
  })