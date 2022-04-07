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
const numberToString = {'-3':'Paper beats rock! You lose', '-2':'Rock beats scissors! You lose!', '-1':'Scissors beat paper! You lose!', 0:'Draw! Nobody wins', 1:'Rock beats scissors! You win!', 2:'Scissors beats paper! You win!', 3:'Paper beats rock! You win!Paper beats rock! You win!'}
function playRound (playerSelection, computerSelection){
    if (playerSelection.toLowerCase() == computerSelection){
        return 0;
    }  else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper"){
        return -3;
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock"){
        return -2;
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors"){
        return -1;
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors"){
        return 1;
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper"){
        return 2;
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock"){
        return 3;
    }
}

function game (){
    let computerScore = 0;
    let playerScore = 0;
    let leftGames = 4;
    const buttons = document.querySelectorAll('button');
    let counter = 0;
    buttons.forEach((button) => {
        button.addEventListener('click', function() {
            if (counter < 5) {
                computerSelection = computerPlay();
                computerSelection.textContent = 'Computer\'s choice is ' + computerSelection;
                const playerSelection = button.textContent;
                console.log("Computer\'s selection is " + computerSelection);
                const computerResultText = document.querySelector('.computer');
                computerResultText.textContent = "Computer\'s selection is " + computerSelection;
                console.log("Player\'s selection is : " + playerSelection);
                const playerResultText = document.querySelector('.player');
                playerResultText.textContent = "Your\'s selection is " + playerSelection;
                const playRoundResult = playRound(playerSelection, computerSelection);
                if (playRoundResult > 0){
                    playerScore ++;
                }
                else if (playRoundResult < 0){
                    computerScore ++;
                }
                console.log(numberToString[playRoundResult]);
                console.log("Your score is " + playerScore + " and Computer\'s score is " + computerScore);
                console.log(leftGames - counter + " games left!")
                counter ++;
            } else {
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
            
        });
    });

}

console.log (game());