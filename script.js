
let playerScore = document.getElementById('playerScore');
let computerScore = document.getElementById('computerScore');
let roundResult = document.getElementById('roundResult');
let playVsComp = document.getElementById('playVsComp');
let compSelect = document.getElementById('compSelect');
let playerSelect = document.getElementById('playerSelect');
let selections = document.querySelectorAll('img');
let playerSelection = ''

let selectionArr = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let selectionNum = Math.floor(Math.random() * 3)
    let computerSelection = selectionArr[selectionNum]

    return computerSelection.toLowerCase()
}

function checkWinner(playerSelection, computerSelection) {

    if (computerSelection === playerSelection) {
        return 'This is a draw'
    } else if (computerSelection === 'paper') {
        return (playerSelection === 'rock') ? `You lose ${computerSelection} beats ${playerSelection}` : `You win ${playerSelection} beats ${computerSelection}`
    } else if (computerSelection == 'rock') {
        return (playerSelection === 'scissors') ? `You lose ${computerSelection} beats ${playerSelection}` : `You win ${playerSelection} beats ${computerSelection}`
    } else if (computerSelection === 'scissors') {
        return (playerSelection === 'paper') ? `You lose ${computerSelection} beats ${playerSelection}` : `You win ${playerSelection} beats ${computerSelection}`
    }

}


let player = 0;
let computer = 0;

function calcScore() {

    if (checkWinner(playerSelection, computerSelection) === `You win ${playerSelection} beats ${computerSelection}`) {
        player++
    } else if (checkWinner(playerSelection, computerSelection) === `You lose ${computerSelection} beats ${playerSelection}`) {
        computer++

    }
}


for (let i = 0; i < selections.length; i++) {
    let playerPlay = selections[i]

    playerPlay.addEventListener('click', function (e) {
        if (player < 5 && computer < 5) {
            playerSelection = e.target.alt
            playerSelect.textContent = playerSelection
            computerSelection = getComputerChoice()
            compSelect.textContent = computerSelection
            let rps = checkWinner(playerSelection, computerSelection)
            roundResult.textContent = rps
            calcScore()

            playerScore.textContent = player
            computerScore.textContent = computer
        } else {
            playVsComp.textContent = (player > computer) ? 'Game Over player Wins' : 'Game Over computer wins'

        }

    })


}

