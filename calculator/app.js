let displayElement = document.getElementById("display");
let displayValue = "0";

// Function to append a number to the display
function appendNumber(number) {
    if (displayValue === "0") {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

// Function to append an operator to the display
function appendOperator(operator) {
    if ("+-*/".includes(displayValue.slice(-1))) {
        displayValue = displayValue.slice(0, -1); // Replace last operator
    }
    displayValue += operator;
    updateDisplay();
}

// Function to clear the display
function clearDisplay() {
    displayValue = "0";
    updateDisplay();
}

// Function to delete the last character
function deleteLast() {
    if (displayValue.length > 1) {
        displayValue = displayValue.slice(0, -1);
    } else {
        displayValue = "0";
    }
    updateDisplay();
}

// Function to calculate the result
function calculate() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = "Error";
    }
    updateDisplay();
}

// Function to update the display
function updateDisplay() {
    displayElement.innerText = displayValue;
}
