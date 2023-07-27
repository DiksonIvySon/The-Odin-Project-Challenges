

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
   
   //Resetting the background color of the computer play buttons to white
   document.querySelector("#btn-computerRock").style.backgroundColor = "white";
   document.querySelector("#btn-computerPaper").style.backgroundColor = "white";
   document.querySelector("#btn-computerScissors").style.backgroundColor = "white";

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

let playerScore = 0;
let computerScore = 0;
let gameWinner;

function outputScore() {
    //outputting the score on to the image in the UI 
    var outputScore = playerScore + " : " + computerScore;
    const gameScore = document.getElementById("gameScore");
    gameScore.textContent = outputScore;
}


function game(string) {
 
        let playerSelection = string;
        let computerSelection = getComputerChoice();
        let roundWinner = singleRound(playerSelection, computerSelection);
        console.log(roundWinner);

        if (roundWinner.substring(0, 9) == "Its a tie"){
            playerScore += 0;
            computerScore += 0;
            outputScore()
        }
        else if (roundWinner.substring(0, 8) == "You Win!"){
            playerScore += 1;
            outputScore()
        }
        else if (roundWinner.substring(0, 14) == "Computer Wins!"){
            computerScore += 1;
            outputScore()
        }
    

    if (playerScore == 5){
        gameWinner = "You";
        result = "**** " + gameWinner + " won the game " + " ****";

        //out putting result on the picture in the UI.
        const gameResult = document.getElementById("gameResult");
        gameResult.textContent = result;

        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore == 5){
        gameWinner = "Computer";
        result = "**** " + gameWinner + " won the game " + " ****";

        //out putting result on the picture in the UI.
        const gameResult = document.getElementById("gameResult");
        gameResult.textContent = result;

        playerScore = 0;
        computerScore = 0;
    }
    else {
        //do nothing
    }
    
}
















