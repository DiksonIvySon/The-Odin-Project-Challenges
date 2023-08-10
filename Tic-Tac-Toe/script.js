let player1 = {
    play: "x",
}

let player2 = {
    play: "o",
}

function print() {
    console.log(player1.play)
    console.log(player2.play)
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
    print();
}

let currentPlayer  = player1.play;

let GameBoard = {
    gameBoardArray: ["", "", "", "", "", "", "", "", ""],
}


//function to render the contents of the gameBoard to the webpage
const blocks = document.querySelectorAll(".block");
blocks.forEach(block => block.addEventListener("click", function(){
    clickedBlock(block);
}))

function clickedBlock(block) {
    const blockIndex = block.getAttribute("blockIndex");
    
    if (GameBoard.gameBoardArray[blockIndex] === "") {
        updateBlock(blockIndex, block);
    }
}

function updateBlock(blockIndex, block) {
    GameBoard.gameBoardArray[blockIndex] = currentPlayer;
    block.textContent = currentPlayer;
    changePlayer();
    console.log(GameBoard.gameBoardArray);
}

function changePlayer() {
    if (currentPlayer === player1.play) {
        currentPlayer = player2.play;
    }
    else {
        currentPlayer = player1.play;
    }
}

