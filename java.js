let options = ["rock","paper","scissors"]
const wrapper = document.getElementById('wrapper');
let buttons = document.querySelectorAll(".btn");
const results = document.getElementById('results');
const computerSelection = options[Math.floor(Math.random() * options.length)] //generate number, multiply by length


function playRound(playerSelection, computerSelection) {
  buttons.forEach((btn) => {
    if(btn.classList.contains('rock')){
      playerSelection = rock;
    }
    if(btn.classList.contains('paper')){
      playerSelection = paper;
    }
    if(btn.classList.contains('scissor')){
      playerSelection = scissor;
    }

  })


  if (computerSelection == playerSelection) {
    results.textContent = "Tie game!";
  }
  
    else {
      results.textContent = "bello";
    }

}




playRound()