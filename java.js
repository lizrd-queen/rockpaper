
const wrapper = document.getElementById('wrapper');
let buttons = document.querySelectorAll(".btn");
const results = document.getElementById('results');


let playerLives = 5;
let computerLives = 5;
let round = 0;


pickOne.textContent = `Hewwo! It's round: ${round}`;
function countRounds() {
  round += 1;
  return round;
}


function getComputerChoice(){
  let options = ["rock","paper","scissor"]
  computerSelection = options[Math.floor(Math.random() * options.length)] //generate number, multiply by length
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
      combatText.innerText = 'u got killed haha';
      gameEndText.textContent = 'You lost, idiot';
      
    }
     }
}


function playRound() {
  let playerSelection;
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
    if(choice.classList.contains('rock')){
      playerSelection = rock;
    }
    if(button.classList.contains('paper')){
      playerSelection = paper;
    }
    if(button.classList.contains('scissor')){
      playerSelection = scissor;
    }
    countRounds();
    countLives(playerSelection, computerPlay());
    endGame(playerLives, computerLives);
      
  })
  })

  
}
  



playRound()