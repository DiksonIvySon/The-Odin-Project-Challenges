
//function for addition
function add(firstNumber, SecondNumber) {
    return firstNumber + SecondNumber;
}

//function for subtraction
function subtract(firstNumber, SecondNumber) {
    return firstNumber - SecondNumber;
}

//function for multiplication
function multiply(firstNumber, SecondNumber) {
    return firstNumber * SecondNumber;
}

//function for division
function divide(firstNumber, SecondNumber) {
    return firstNumber / SecondNumber;
}


let firstNumber = 4;
let SecondNumber = 2;
let operator = "+";
console.log(operate(firstNumber, SecondNumber, operator));

function operate(firstNumber, SecondNumber, operator) {
    if (operator === "+") {
        return add(firstNumber, SecondNumber);
    }
    else if (operator === "-") {
        return subtract(firstNumber, SecondNumber);
    }
    else if (operator === "*") {
        return multiply(firstNumber, SecondNumber);
    }
    else if (operator === "/") {
        return divide(firstNumber, SecondNumber);
    }
    else {
        alertMessage = operator + " is not an allowed operator."
        console.log(alertMessage);
    }
}