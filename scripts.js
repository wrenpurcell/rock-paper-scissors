//randomly return 'rock' 'paper' or 'scissors'
function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    let min = 0;
    let max = 3;
    let randomInt = Math.floor(Math.random() * (max - min) + min);
    return options[randomInt];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();
    
    if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            return 'computer win';
        }
        else if (computerSelection == 'rock') {
            return 'tie';
        }
        else if (computerSelection == 'scissors') {
            return 'player win';
        }
        else {
            return 'Error'
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'paper') {
            return 'tie';
        }
        else if (computerSelection == 'rock') {
            return 'player win';
        }
        else if (computerSelection == 'scissors') {
            return 'computer win';
        }
        else {
            return 'Error'
        }
    }
    else if (playerSelection == 'scissors') {
        if (computerSelection == 'paper') {
            return 'player win';
        }
        else if (computerSelection == 'rock') {
            return 'computer win';
        }
        else if (computerSelection == 'scissors') {
            return 'tie';
        }
        else {
            return 'Error'
        }
    }
}
//play 5 round game that keeps score and reports winner or loser at the end
function game() {
    let computerScore = 0;
    let playerScore = 0;
    let tieScore = 0;
    for (let i = 1; i < 6; i++) {
        let computerSelection = computerPlay();
        let playerSelection = prompt('type rock, paper or scissors');
        let result = playRound(playerSelection, computerSelection);
        console.log(`round ${i}: you chose ${playerSelection} and the computer chose ${computerSelection}`)
        if(result=='computer win'){
            computerScore++;
        }
        else if(result=='player win'){
            playerScore++
        }
        else if(result =='tie'){
            tieScore++
        }
        else{
            console.log('error');
        }
    }
    //after loop ends declare winner
    if(playerScore>computerScore){
        return 'You won! The score was: ' + playerScore +' to'+ computerScore + 'with ' + tieScore + ' ties';
    }
    else if(playerScore<computerScore){
        return 'You lost :( The score was: ' + computerScore +' to '+  playerScore+ ' with ' + tieScore + ' ties';
    }
    else if(tieScore==5){
        return 'All 5 matches were a tie!'
    }
    else {
        return 'Error!';
    }
}

function main() {
    console.log(game());
}
main();