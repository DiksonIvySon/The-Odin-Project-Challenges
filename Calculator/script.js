
//function for addition
function add(a,b) {
    return a + b;
}

//function for subtraction
function subtract(a, b) {
    return a - b;
}

//function for multiplication
function multiply(a, b) {
    return a * b;
}

//function for division
function divide(a, b) {
    return a / b;
}


let firstNumber;
let SecondNumber;
let operator;

function operate(firstNumber, SecondNumber, operator) {
    if (operator === "+") {
        add(firstNumber, SecondNumber);
    }
    else if (operator === "-") {
        subtract(firstNumber, SecondNumber);
    }
    else if (operator === "*") {
        multiply(firstNumber, SecondNumber);
    }
    else if (operator === "/") {
        divide(firstNumber, SecondNumber);
    }
    else {
        alertMessage = operator + " is not an allowed operator."
        alert(alertMessage)
    }
}