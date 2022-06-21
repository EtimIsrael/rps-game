const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice
let computerCChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 //or you can use possibleChoices.length
  
  if (randomNumber === 1) {
    computerCChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerCChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerCChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerCChoice
}

function getResult() {
  if (computerCChoice === userChoice) {
    result = 'Its a Draw'
  }
  if (computerCChoice === 'rock' && userChoice === "paper") {
    result = 'You Win'
  }
  if (computerCChoice === 'rock' && userChoice === "scissors") {
    result = 'You Lose'
  }
  if (computerCChoice === 'paper' && userChoice === "scissors") {
    result = 'You Win'
  }
  if (computerCChoice === 'paper' && userChoice === "rock") {
    result = 'You Lose'
  }
  if (computerCChoice === 'scissors' && userChoice === "rock") {
    result = 'You Win'
  }
  if (computerCChoice === 'scissors' && userChoice === "paper") {
    result = 'You Lose'
  }
  resultDisplay.innerHTML = result
}