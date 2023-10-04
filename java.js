let buttons = document.querySelectorAll(".btn");
const buttonContainer = document.querySelector('.button-container');
const pickOne = document.querySelector(".pickOne");
const results = document.querySelector(".results");
let playerSelection;

let playerLives = 5;
let computerLives = 5;
let round = 0;



function countRounds() {
  round += 1;
  pickOne.textContent = `Hewwo! It's round: ${round}`;
  return round;
}


function getComputerChoice(){
  let options = ["rock","paper","scissor"]
  computerSelection = options[Math.floor(Math.random() * options.length)] //generate number, multiply by length
  return computerSelection;
}

function countLives(playerSelection, computerSelection) {
  const results = document.querySelector('.results');
  switch (true) {
    case (playerSelection === computerSelection):
      results.innerText = `its a tie uwu`
      break;
    case (playerSelection === 'rock' && computerSelection === 'paper'):
    case (playerSelection === 'paper' && computerSelection === 'scissor'):
    case (playerSelection === 'scissor' && computerSelection === 'rock'):
      results.textContent = `so ${computerSelection} beats ${playerSelection}`
      playerLives -= 1;
      break;
    case (playerSelection === 'rock' && computerSelection === 'scissor'):
    case (playerSelection === 'paper' && computerSelection === 'rock'):
    case (playerSelection === 'scissor' && computerSelection === 'paper'):
        results.textContent = `wow you did it, ${playerSelection} beats ${computerSelection}`
        computerLives -= 1;
        break; 

}
const lives = document.querySelector('.lives');
lives.innerText = `Your Lives: ${playerLives} ︱ Enemy's Lives: ${computerLives}`;
return [playerLives, computerLives];
}

function endGame(playerHealth, computerHealth) {
  if (playerHealth === 0 || computerHealth === 0) {
    buttons.forEach((btn) => {
      btn.setAttribute('disabled', '');
    });
    const gameEndText = document.querySelector('.game-end-text');
    if (playerLives > computerLives) {
      results.innerText = 'mfw u freakin killed him -_-';
      gameEndText.textContent = 'You Won!';
    } else {
      results.innerText = 'u got killed haha';
      gameEndText.textContent = 'You lost, idiot';
      
    }
     }
}


function playRound() {
  
  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
    if(button.classList.contains('rock')){
      playerSelection = 'rock';
    } else if(button.classList.contains('paper')){
      playerSelection = 'paper';
    } else if(button.classList.contains('scissor')){
      playerSelection = 'scissor';
    }
    countRounds();
    countLives(playerSelection, getComputerChoice());
    endGame(playerLives, computerLives);
      
  })
  })

  
}
  




  playRound();
