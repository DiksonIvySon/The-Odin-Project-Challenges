
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

const keyArray = [];

//function to store the expression that is made when the keyboard keys are clicked
function Display(keyboardKey) {
    
    keyArray.push(keyboardKey);
    
    let keyArrayString = keyArray.join(' '); 
    document.querySelector(".expression").textContent = keyArrayString;
}

//function to populate the expression that is made when the keyboard keys are clicked
function Populate(keyboardKey) {
    if (typeof keyboardKey === 'number') {
        Display(keyboardKey);
    }
}


/*clickedButton = document.querySelector(".zero");
clickedButton.addEventListener("click", function() {
    let clickedButtonValue = clickedButton.value;
    Populate(clickedButtonValue);
});*/





