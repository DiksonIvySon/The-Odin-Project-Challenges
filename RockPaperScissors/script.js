

function getComputerChoice(){
    //   result =s a random integer from 1 to 3:
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice;

    if (randomNumber == 1){
        computerChoice = "rock";
    }
    else if (randomNumber == 2){
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
   
   //document.querySelector(".computer-play").textContent = computerChoice;
   comPlay(computerChoice);
   return computerChoice;
}

//function to chang the background color of the computer play buttons to show the computers play
function comPlay(play) {
    let playID;
    if (play === "rock"){
        playID = "#btn-computerRock";
    }
    else if (play === "paper") {
        playID = "#btn-computerPaper";
    }
    else {
        playID = "#btn-computerScissors";
    }

    document.querySelector(playID).style.backgroundColor = "aqua";
}

function singleRound(playerSelection, computerSelection){

    // when there is a tie
    if (playerSelection === computerSelection){
       result = "It's a tie, Ow man, lets try again";
    }
    else if (playerSelection != computerSelection){
        // player win chances
        if (playerSelection === "rock" && computerSelection === "scissors"){
            result = "You Win!, Rock beats Scissors";
        }
        else if (playerSelection === "scissors" && computerSelection === "paper"){
            result = "You Win! Scissors beats Paper";
        }
        else if (playerSelection === "paper" && computerSelection === "rock"){
            result = "You Win!, Paper beats Rock";
        }
        // computer win chances
        else if (playerSelection === "scissors" && computerSelection === "rock"){
            result = "Computer Wins!, Rock beats Scissors";
        }
        else if (playerSelection === "paper" && computerSelection === "scissors"){
            result = "Computer Wins!, Scissors beats Paper";
        }
        else if (playerSelection === "rock" && computerSelection === "paper"){
            result = "Computer Wins!, Paper beats Rock";
        }
    }
    else {
        result = "There is an error!!"
    }

    //out putting result on the picture in the UI.
    const gameResult = document.getElementById("gameResult");
    gameResult.textContent = result;

    return result;

}
  
var playerScore = 0;
var computerScore = 0;
var gameWinner;

//outputting the score on to the image in the UI 
var outputScore = playerScore + " : " + computerScore;
const gameScore = document.getElementById("gameScore")
gameScore.textContent = outputScore;

//function that will listen to which button is clicked and return the play value                (THERE IS A PROBLEM HERE)
function clickListener() {
    const btnPlayerRock = document.querySelector(".btn-playerRock");
    const btnPlayerPaper = document.querySelector(".btn-playerPaper");
    const btnPlayerScissors = document.querySelector(".btn-playerScissors");

    btnPlayerRock.addEventListener("click", e => {
        game("rock"); 
    })
    btnPlayerPaper.addEventListener("click", e => {
        game("paper");
    })
    btnPlayerScissors.addEventListener("click", e => {
        game("scissors");
    })
}

function game(string) {
 
    for(let i=1; i<=5; i++){
        let playerSelection = string;
        let computerSelection = getComputerChoice();
        let roundWinner = singleRound(playerSelection, computerSelection);
        console.log(roundWinner);

        if (roundWinner.substring(0, 9) == "Its a tie"){
            playerScore += 0;
            computerScore += 0;
        }
        else if (roundWinner.substring(0, 8) == "You Win!"){
            playerScore += 1;
        }
        else if (roundWinner.substring(0, 14) == "Computer Wins!"){
            computerScore += 1;
        }
    }

    if (playerScore > computerScore){
        gameWinner = "You";
    }
    else if (playerScore < computerScore){
        gameWinner = "Computer";
    }
    else {
        gameWinner = "Its an over-all tie, everyone";
    }
    
    result = "**** " + gameWinner + " won the game " + " ****";

    //out putting result on the picture in the UI.
    const gameResult = document.getElementById("gameResult");
    gameResult.textContent = result;
}
















