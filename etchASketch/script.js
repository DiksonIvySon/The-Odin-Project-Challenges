
//javascript code for the card slider.........................................................................



//javascript code for the drawing surface.....................................................................
function multipleBox(size) {
    let drawingSurface = document.querySelector(".drawing-grid");
    let boxes = drawingSurface.querySelectorAll("div");
    boxes.forEach((div) => div.remove());
    drawingSurface.style.gridTemplateColumns = `repeat(${size} ,1fr)`;
    drawingSurface.style.gridTemplateRows = `repeat(${size} ,1fr)`;

    var gridSize = size * size;
    for (let i = 0; i < gridSize; i++){
        let box = document.createElement("div");
        box.addEventListener("mouseover", drawingColor);
        box.style.backgroundColor = "white";
        box.style.border = "0px";
        drawingSurface.insertAdjacentElement("beforeend", box);
    }
}

multipleBox(16);
var color = black;

//function to set grid limitations to a min of 2 and a max of 100 (still need to fix)
function changeSize(input) {
    if (input >= 2 && input <= 100) {
        multipleBox(input);
    }
    else {
        console.log("Too many boxes, max is x");
    }
}

//function to change the color of the drawing pen, color is defined globally
function drawingColor() {
    this.style.backgroundColor = color;
}

//function to assign the new color to change to
function changeColor(choice) {
    color = choice;
}

//function to reset the drawing surface, it is triggered when the reset button is clicked
function resetDrawingSurface() {
    let drawingSurface = document.querySelector(".drawing-grid");
    let boxes = drawingSurface.querySelectorAll("div");
    boxes.forEach((div) => div.style.backgroundColor = "white");
}