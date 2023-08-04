let player1 = {
    play: "x",
}

let player2 = {
    play: "o",
}

console.log(player1.play)
console.log(player2.play)

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


let GameBoard = {
    gameBoard: ["x", "o", "x", "o", "x", "o", "x", "o", "x"],
}


/*
function block(number) {
    if (playArray === []) {
         let blockObject = {
            blockNumber: number,
            blockPlay:  
         }
    }
}*/