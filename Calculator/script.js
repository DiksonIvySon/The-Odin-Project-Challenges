
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

//function to use the defined operator to complete to correct calculation by calling the corresponding method.
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
        return Divide(firstNumber, SecondNumber);
    }
    else {
        alertMessage = operator + " is not an allowed operator."
        console.log(alertMessage);
    }
}

let operatorValue = "" ;
let previousValue = "";
let currentValue = "";

//selecting all buttons using querySelectors
//Decimal querySelector is not included because: decimal forms part of a number and there will work well if treated as a number.
let previousValueScreen = document.querySelector('.previousValueScreen');
let currentValueScreen = document.querySelector('.currentValueScreen');
let operators = document.querySelectorAll('.operator');
let numbers = document.querySelectorAll('.number');
let clearButton = document.querySelector('.clear-btn');
let backSpaceButton = document.querySelector('.backSpace-btn');
let equalsButton = document.querySelector('.equals-btn');

//operator event listener to call a handle operator function that will define the operator
operators.forEach(operator => {
    operator.onclick = () => {
        operatorValue = operator.value;
        previousValue = currentValue;
        currentValue = "";
        previousValueScreen.textContent = previousValue + " " + operatorValue;
        currentValueScreen.textContent = currentValue;
    }
})

//number event listener to define the currentValue by adding the number
numbers.forEach(number => {
    number.onclick = () => {
        currentValue += number.value;
        currentValueScreen.textContent = currentValue;
    }
})

//clearButton event listener to clear the screen
clearButton.addEventListener('click', function() {
    operatorValue = "";
    previousValue = "";
    currentValue = "";
    previousValueScreen.textContent = previousValue;
    currentValueScreen.textContent = previousValue;
}) 

//equalsButton event listener to do the calculations
equalsButton.addEventListener('click', function() {
    if (previousValue === "" && currentValue === "") {
        alert("Please enter the numbers to calculate.");
    }
    else if (operatorValue === "") {
        //Do nothing.
    }
    else {
        currentValue = Number(currentValue);  
        previousValue = Number(previousValue);
        let result = Operate(previousValue, currentValue, operatorValue);
        result = result.toString();
        currentValueScreen.textContent = result;
        previousValue = "";
        previousValueScreen.textContent = previousValue; 
    }
});

//backspaceButton event listener to remove the last character of the currentValue
backSpaceButton.addEventListener('click', function() {
    valueToRemove = currentValue.charAt(currentValue.length-1);
    currentValue = currentValue.replace(valueToRemove, ""); 
    currentValueScreen.textContent = currentValue;
    
    //condition to make sure of that if the currentValue is empty then the user can change the previous value.
    if (currentValue === "" && previousValue === "") {
        //do nothing
    }
    else if (currentValue === "") {
        currentValue = previousValue + " " + operatorValue;
        currentValueScreen.textContent = currentValue;

        previousValue = "";
        previousValueScreen.textContent = "";
    }
})




