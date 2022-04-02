function computerPlay () {
    let computerResult = Math.floor(Math.random() * 3)
    switch (computerResult) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound (playerSelection, computerSelection){
    if (playerSelection.toLowerCase() == computerSelection){
        return "draw";
    }  else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper"){
        return "Paper beats rock! You lose!";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock"){
        return "Rock beats scissors! You lose!";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors"){
        return "Paper beats scissors! You lose!";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors"){
        return "Rock beats scissors! You win!";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper"){
        return "Scissors beats paper! You win!";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock"){
        return "Paper beats rock! You win!"
    }
}
const playerSelection = "ROck";
const computerSelection = computerPlay();
console.log("Computer: " + computerSelection);
console.log("Player: " + playerSelection)
console.log(playRound(playerSelection, computerSelection));