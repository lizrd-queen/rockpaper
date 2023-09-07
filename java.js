let options = ["rock","paper","scissors"]
const wrapper = document.getElementById('wrapper');
let buttons = document.querySelectorAll(".btn");
function getComputerChoice() {
    const computerSelection = options[Math.floor(Math.random() * options.length)] //generate number, multiply by length
    console.log(computerSelection)
}
function playGame() {
  let playerSelection;
   buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if(button.classList.contains('rock')){
          playerSelection = rock;
        };
        if(button.classList.contains('paper')){
          playerSelection = rock;
        };
        if(button.classList.contains('scissors')){
          playerSelection = rock;
        }
      
    
    
    playRound(playerSelection, computerSelection);

    if (playerScore === 5 || computerScore === 5) {
      declareWinner();
    }
  });
});
}

playGame()