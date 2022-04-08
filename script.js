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
const numberToString = {'-3':'Paper beats rock! You lose', '-2':'Rock beats scissors! You lose!', '-1':'Scissors beat paper! You lose!', 0:'Draw! Nobody wins', 1:'Rock beats scissors! You win!', 2:'Scissors beats paper! You win!', 3:'Paper beats rock! You win!'}
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
    const body = document.querySelector('body');
    const buttons = document.querySelectorAll('button');
    let counter = 0;
    const currentScore = document.querySelector('.currentScore');
    buttons.forEach((button) => {
        button.addEventListener('click', function() {
            if (counter < 4) {
                computerSelection = computerPlay();
                computerSelection.textContent = 'Computer\'s choice is ' + computerSelection;
                const playerSelection = button.textContent;
                const computerResultText = document.querySelector('.computer');
                computerResultText.textContent = "Computer\'s selection is " + computerSelection;
                computerResultText.setAttribute('style', 'display: flex; justify-content: center;');
                const playerResultText = document.querySelector('.player');
                playerResultText.textContent = "Your\'s selection is " + playerSelection;
                playerResultText.setAttribute('style', 'display: flex; justify-content: center;')
                const playRoundResult = playRound(playerSelection, computerSelection);
                if (playRoundResult > 0){
                    playerScore ++;
                }
                else if (playRoundResult < 0){
                    computerScore ++;
                }
                const playRoundText = document.querySelector('.roundResult');
                playRoundText.setAttribute('style', 'display:flex; justify-content: center; font-weight: bold; font-size: 26px;')
                playRoundText.textContent = numberToString[playRoundResult];

                currentScore.textContent = ('Computer\'s score is ' + computerScore + ' : ' + playerScore + ' Player\'s score');
                currentScore.setAttribute('style', 'padding-top: 20px; text-align: center; font-size: 16px;');
                counter ++;
            } else {
                currentScore.textContent = ('');
                const gameResult = document.querySelector('.gameResult');
                gameResult.setAttribute('style', 'text-align: center;')
                if (computerScore > playerScore) {
                    gameResult.textContent = ("You lost the game! Wanna try again?");
                } else if (computerScore < playerScore) {
                    gameResult.textContent = ("You won the game! Wanna try again?");
                } else {
                    gameResult.textContent = ("The result of a game is draw! Wanna play another one?");
                    } 
                counter = 0;
                const container = document.createElement('div');
                container.setAttribute('style', 'display:flex; justify-content: center;')
                body.appendChild(container);
                const playAgain = document.createElement('button');
                playAgain.textContent = "Play again";
                playAgain.setAttribute('style', 'display: flex; justify-content: center; background-color: blue; color: white; border-width: 1px; border-radius: 5px; border-color: black;');
                container.appendChild(playAgain);
                playAgain.addEventListener('click', () => {
                    counter = 0;
                    container.removeChild(playAgain);
                    body.removeChild(container);
                    gameResult.textContent = ('');
                    container.remove();
                    playAgain.remove();
                    game();
                })
            }
        });
    });

}

console.log (game());