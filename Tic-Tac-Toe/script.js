
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
    const allEquals = arr => arr.every(val => val === arr[0]);
    
    let G = GameBoard.gameBoardArray;
    
    //checking horizontal possible wins.
    if (allEquals(G[0], G[1], G[2]) === "true") {
        displayWinner(G[0]);
    }
    else if (allEquals(G[3], G[4], G[5]) === "true") {
        displayWinner(G[3]);
    }
    else if (allEquals(G[6], G[7], G[8]) === "true") {
        displayWinner(G[6]);
    }
    //checking vertical possible wins.
    else if (allEquals(G[0], G[3], G[6]) === "true") {
        displayWinner(G[0]);
    }
    else if (allEquals(G[1], G[4], G[7]) === "true") {
        displayWinner(G[1]);
    }
    else if (allEquals(G[2], G[5], G[8]) === "true") {
        displayWinner(G[2]);
    }
    //checking diagonal possible wins.
    else if (allEquals(G[0], G[4], G[8]) === "true") {
        displayWinner(G[0]);
    }
    else if (allEquals(G[2], G[4], G[6]) === "true") {
        displayWinner(G[2]);
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

