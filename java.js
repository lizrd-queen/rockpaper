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

function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("rock paper scissors");
        if(choice == null)
            continue;
        }
        const choiceinLower = choice.toLowerCase();
        if(options.includes(choiceinLower)){
            validatedInput = true;
             return choiceinLower;

        }
}



function game(){
    let scorePlayer = 0;
    let scoreComputer =0;
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log("Welcome!")
    for (let i= 0; i <5; i++){
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
        console.log("------")
        if(checkWinner(playerSelection,computerSelection) == "player"){
        scorePlayer++;
    }
    else if(checkWinner(playerSelection, computerSelection) == "computer") {
        scoreComputer++;
    }


    _}
    console.log("game over")
   
    if(scorePlayer >scoreComputer){
        console.log("Player was the winner");
    }
    else if(scorePlayer < scoreComputer){
        console.log("Computer was the winner");
        }
        else{
            console.log("We have a tie!")
    }
}


game()