const options = ["rock", "paper","scissors"];

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)]
    return choice;
}

function checkWinner(playerSelection,computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    }   
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == paper) ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "player"
    }
    else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection)
    if(result == "tie"){
        return "TIE!!!!"
    }
else if(result == "player"){
    return `you are da winna man! ${playerSelection} beats ${computerSelection}`
}
else {
    return `you losea man! ${computerSelection} beats ${playerSelection}`
}
}
getComputerChoice();


const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))