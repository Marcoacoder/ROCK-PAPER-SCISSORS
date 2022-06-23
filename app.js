const resultDisplay = document.getElementById('result');
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);
    if (randomNumber === 0) {
        computerChoice = 'ROCK'
    }
    if (randomNumber === 1) {
        computerChoice = 'PAPER'
    }
    if (randomNumber === 2) {
        computerChoice = 'SCISSORS'
    }
    computerChoiceDisplay.innerHTML = computerChoice;
    return computerChoice;
    
}

function getResult() {
    if (userChoice == computerChoice) {
        result = 'DRAW';
    }
    if (userChoice == "ROCK" && computerChoice == 'PAPER') {
        result = 'LOSE';
    }
    if (userChoice == "ROCK" && computerChoice == 'SCISSORS') {
        result = 'WIN';
    }
    if (userChoice == "PAPER" && computerChoice == 'ROCK') {
        result = 'WIN';
    }
    if (userChoice == "PAPER" && computerChoice == 'SCISSORS') {
        result = 'LOSE';
    }
    if (userChoice == "SCISSORS" && computerChoice == 'ROCK') {
        result = 'LOSE';
    }
    if (userChoice == "SCISSORS" && computerChoice == 'PAPER') {
        result = 'WIN';
    }

    resultDisplay.innerHTML = result;
    return result;
}