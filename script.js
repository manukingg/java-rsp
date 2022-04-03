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
        return "Draw! Nobody wins";
    }  else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper"){
        return "Paper beats rock! You lose!";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock"){
        return "Rock beats scissors! You lose!";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors"){
        return "Scissors beat paper! You lose!";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors"){
        return "Rock beats scissors! You win!";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper"){
        return "Scissors beats paper! You win!";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock"){
        return "Paper beats rock! You win!";
    }
}

function game (){
    let computerScore = 0;
    let playerScore = 0;
    let leftGames = 4;
    for (let i = 0; i < 5; i++){
        const playerSelection = window.prompt("What\'s Your coice?");
        const computerSelection = computerPlay();

        console.log("Computer\'s selection is " + computerSelection);
        console.log("Player\'s selection is : " + playerSelection);
        console.log(playRound(playerSelection, computerSelection));
        if (playRound(playerSelection, computerSelection).slice(-8) == "You win!"){
            playerScore++;
        }
        else if (playRound(playerSelection, computerSelection).slice(-9) == "You lose!"){
            computerScore++;
        }
        console.log("Your score is " + playerScore + " and Computer\'s score is " + computerScore);
        console.log(leftGames - i + " games left!")
    }
    if (computerScore > playerScore){
        const lostAnswer = window.prompt("You lost the game! Wanna try again?");
        if (lostAnswer == "yes"){
            console.log(game());
        }
    } else if (computerScore < playerScore){
        const wonAnswer = window.prompt("You won the game! Wanna play again?");
        if (wonAnswer == "yes"){
            console.log(game());
        }
    } else {
        const drawAnswer = window.prompt("The result of a game is draw! Wanna play another one?");
        if (drawAnswer == "yes"){
            console.log(game());
        }
    }
}

console.log (game());