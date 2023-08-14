
let player1 = {
    play: "x",
}

let player2 = {
    play: "o",
}

//function to take the value of the selection (X OR O)
function playSelection() {
    let selection = document.querySelector("#playSelection").value;
    let player1_play;
    let player2_play;

    if (selection === "x") {
        player1_play = "x";
        player2_play = "o";
    }
    else {
        player1_play = "o";
        player2_play = "x";
    }
    

    player1.play = player1_play;
    player2.play = player2_play;
}

let currentPlayer  = player1.play;

let GameBoard = {
    gameBoardArray: ["", "", "", "", "", "", "", "", ""],
}


//played block event listener to use an anonymous function to call function clickedBlock()
const blocks = document.querySelectorAll(".block");
blocks.forEach(block => block.addEventListener("click", function(){
    clickedBlock(block);
}))

//function clicked block checks if the block is empty and it it is the calls function updateBlock()
function clickedBlock(block) {
    const blockIndex = block.getAttribute("blockIndex");
    
    if (GameBoard.gameBoardArray[blockIndex] === "") {
        updateBlock(blockIndex, block);
    }
    
}

//function to update the block to the corresponding play and call the change player function
function updateBlock(blockIndex, block) {
    GameBoard.gameBoardArray[blockIndex] = currentPlayer;
    block.textContent = currentPlayer;
    checkWinner();
    changePlayer();
}

//function to change the player to play next after every play
function changePlayer() {
    if (currentPlayer === player1.play) {
        currentPlayer = player2.play;
    }
    else {
        currentPlayer = player1.play;
    }
}

//function to check if there is a winner after every play
function checkWinner() {

    //function that goes through an array to check if all the values are equal
    function allEquals(value1, value2, value3) {
        if (value1 === "" || value2 === "" || value3 === "") {
            result = "false";
        }
        else if (value1 === value2 && value2 === value3) {
            result = "true";
        }
        else {
            result = "false";
        }
        
        return result;
    }
    
    let G = GameBoard.gameBoardArray;
    
    //checking horizontal possible wins.
    if (allEquals(G[0], G[1], G[2]) === "true") {
        displayWinner(G[0]);
        showWiningPlays(0,1,2);
        endGame()
    }
    else if (allEquals(G[3], G[4], G[5]) === "true") {
        displayWinner(G[3]);
        showWiningPlays(3,4,5);
        endGame()
    }
    else if (allEquals(G[6], G[7], G[8]) === "true") {
        displayWinner(G[6]);
        showWiningPlays(6,7,8);
        endGame()
    }
    //checking vertical possible wins.
    else if (allEquals(G[0], G[3], G[6]) === "true") {
        displayWinner(G[0]);
        showWiningPlays(0,3,6);
        endGame()
    }
    else if (allEquals(G[1], G[4], G[7]) === "true") {
        displayWinner(G[1]);
        showWiningPlays(1,4,7);
        endGame();
    }
    else if (allEquals(G[2], G[5], G[8]) === "true") {
        displayWinner(G[2]);
        showWiningPlays(2,5,8);
        endGame()
    }
    //checking diagonal possible wins.
    else if (allEquals(G[0], G[4], G[8]) === "true") {
        displayWinner(G[0]);
        showWiningPlays(0,4,8);
        endGame()
    }
    else if (allEquals(G[2], G[4], G[6]) === "true") {
        displayWinner(G[2]);
        showWiningPlays(2,4,6);
        endGame()
    }
    else {
        let displayWinnerScreen = document.querySelector('.displayWinner');
        displayWinnerScreen.textContent = "Keep on playing";
    }

}

//function to display the winner of the game
function displayWinner(winner) {
    let displayWinnerScreen = document.querySelector('.displayWinner');
    displayWinnerScreen.textContent = winner + " wins the game";
}

//function to make sure of that no one can continue playing if there is a winner
//This function does this by defining all of the empty block after a win so that no one else can play
function endGame() {
    for (let i = 0; i < GameBoard.gameBoardArray.length; i++) {
        if (GameBoard.gameBoardArray[i] === "") {
            GameBoard.gameBoardArray[i] = " ";
        }
        else {
            //Do nothing (this would mean that the block is not empty)
        }
    }
}

//function to change the background color of the wining plays if there is a winner
function showWiningPlays(block1, block2, block3) {
    block1 = block1.toString();
    block2 = block2.toString();
    block3 = block3.toString();

    document.getElementById(block1).style.backgroundColor = "yellow";
    document.getElementById(block2).style.backgroundColor = "yellow";
    document.getElementById(block3).style.backgroundColor = "yellow";
} 

//Making the restart game button function
document.querySelector('.restart-btn').addEventListener('click', function() {
    for (let i = 0; i < GameBoard.gameBoardArray.length; i++) {
        GameBoard.gameBoardArray[i] = "";
    }
    
    let blocks = document.querySelectorAll('.block');
    blocks.forEach(block => block.textContent = "");

    //return all blocks colors to normal
    for (i = 0; i < GameBoard.gameBoardArray.length; i++) {
        let resetBlock = i.toString();
        document.getElementById(resetBlock).style.backgroundColor = "gray";
    }

    //reset the displayWinner screen
    document.querySelector('.displayWinner').textContent = "";
}) 
