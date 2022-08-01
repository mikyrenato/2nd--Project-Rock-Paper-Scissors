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
      makeChoice(selection)
    })
  })

  function makeChoice(selection) {
    const computersChoice = randomSelection()
    const yourWin = isWinner(selection, computersChoice)
    const computerWins = isWinner(computersChoice, selection)
  
    addSelectionResult(computersChoice, computerWinner)
    addSelectionResult(selection, yourWinner)
  
    if (yourWin) incrementScore(yourScore)
    if (computerWins) incrementScore(computerScore)
  }