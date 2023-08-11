
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

let operator ;
let previousValue;
let currentValue;

//selecting all buttons using querySelectors
let previousValueScreen = document.querySelector('.previousValueScreen');
let currentValueScreen = document.querySelector('.currentValueScreen');
let operators = document.querySelectorAll('operator');
let numbers = document.querySelectorAll('.number');
let decimal = document.querySelector('decimal');
let clearButton = document.querySelector('.clear-btn');
let backSpace = document.querySelector('.backspace-btn');
let equalsButton = document.querySelector('.equals.btn');


/*
//function to display on screen the expression that is made when the keyboard keys are clicked
function Display() {
    let keyArrayString = keyArray.join(' '); 
    document.querySelector(".expression").textContent = keyArrayString;
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

*/





