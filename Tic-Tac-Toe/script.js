
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
    const allEquals = aar => array.every(val => val === arr[0]);
    
    let G = GameBoard;
    let g = gameBoardArray;
    
    //checking horizontal possible wins.
    if (allEqualsEquals(G.g[0], G.g[1], G.g[2]) === "true") {
        displayWinner(G.g[0]);
    }
    else if (allEqualsEquals(G.g[3], G.g[4], G.g[5]) === "true") {
        displayWinner(G.g[3]);
    }
    else if (allEqualsEquals(G.g[6], G.g[7], G.g[8]) === "true") {
        displayWinner(G.g[6]);
    }
    //checking vertical possible wins.
    else if (allEqualsEquals(G.g[0], G.g[3], G.g[6]) === "true") {
        displayWinner(G.g[0]);
    }
    else if (allEqualsEquals(G.g[1], G.g[4], G.g[7]) === "true") {
        displayWinner(G.g[1]);
    }
    else if (allEqualsEquals(G.g[2], G.g[5], G.g[8]) === "true") {
        displayWinner(G.g[2]);
    }
    //checking diagonal possible wins.
    else if (allEqualsEquals(G.g[0], G.g[4], G.g[8]) === "true") {
        displayWinner(G.g[0]);
    }
    else if (allEqualsEquals(G.g[2], G.g[4], G.g[6]) === "true") {
        displayWinner(G.g[2]);
    }
    else {
        //must display "keep on playing"
    }

}

//function to display the winner of the game
function displayWinner(winner) {
    let displayWinnerScreen = document.querySelector('.displayWinner');
    displayWinnerScreen.textContent = winner + " wins the game";
}

