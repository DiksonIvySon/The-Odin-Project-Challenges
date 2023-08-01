
//function for addition
function Add(firstNumber, SecondNumber) {
    return firstNumber + SecondNumber;
}

//function for subtraction
function Subtract(firstNumber, SecondNumber) {
    return firstNumber - SecondNumber;
}

//function for multiplication
function Multiply(firstNumber, SecondNumber) {
    return firstNumber * SecondNumber;
}

//function for division
function Divide(firstNumber, SecondNumber) {
    return firstNumber / SecondNumber;
}


let firstNumber;
let SecondNumber;
let operator;
/*console.log(Operate(firstNumber, SecondNumber, operator));*/

function Operate(firstNumber, SecondNumber, operator) {
    if (operator === "+") {
        return Add(firstNumber, SecondNumber);
    }
    else if (operator === "-") {
        return Subtract(firstNumber, SecondNumber);
    }
    else if (operator === "*") {
        return Multiply(firstNumber, SecondNumber);
    }
    else if (operator === "/") {
        return divide(firstNumber, SecondNumber);
    }
    else {
        alertMessage = operator + " is not an allowed operator."
        console.log(alertMessage);
    }
}

let keyArray = [];
let numberKeyArray = [];
let symbolKeyArray = [];

//function to display on screen the expression that is made when the keyboard keys are clicked
function Display() {
    let keyArrayString = keyArray.join(' '); 
    document.querySelector(".expression").textContent = keyArrayString;
}


//function to populate the expression that is made when the keyboard keys are clicked
function Populate(keyboardKey) {

    keyArray.push(keyboardKey);
    Display();

    if (typeof keyboardKey === 'number') {
        numberKeyArray.push(keyboardKey);
    }
    else {
        symbolKeyArray.push(keyboardKey);
    }

    
}

//function to clear the screen when called
function clearScreen() {
    keyArray = [];
    Display();
}

//function to remove to remove the last entered item when the when the backspace button is clicked
function backSpace() {
    keyArray.pop();
    Display();
} 

//function sum up the expression
function equals() {
    if (typeof keyArray[-1] === 'symbol' ) {
        alert("Your expression ends with a symbol")
    }
}


/*clickedButton = document.querySelector(".zero");
clickedButton.addEventListener("click", function() {
    let clickedButtonValue = clickedButton.value;
    Populate(clickedButtonValue);
});*/





