let currentInput = '';  // Stores the current number being entered
let previousInput = ''; // Stores the first operand
let operator = '';      // Stores the selected operator

// Appends the clicked number to the current input
function appendNumber(number) {
  currentInput += number;
  document.getElementById('display').value = currentInput;  // Update the display
}

// Stores the operator and the first number entered
function chooseOperator(op) {
  if (currentInput === '') return; // Prevent choosing operator without a number
  previousInput = currentInput;    // Store the current input as the first operand
  operator = op;                   // Store the operator (+, -, *, /)
  currentInput = '';               // Clear the current input for the next number
}

// Perform the calculation when "=" is pressed
function calculate() {
  if (previousInput === '' || currentInput === '' || operator === '') return;

  let result;
  switch (operator) {
    case '+':
      result = add(previousInput, currentInput);
      break;
    case '-':
      result = subtract(previousInput, currentInput);
      break;
    case '*':
      result = multiply(previousInput, currentInput);
      break;
    case '/':
      result = divide(previousInput, currentInput);
      break;
  }

  document.getElementById('display').value = result;
  currentInput = result; // Store the result as the current input
  previousInput = '';    // Clear the first operand
  operator = '';         // Clear the operator
}

// Resets the calculator display and variables
function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = '';
  document.getElementById('display').value = '';
}

// Helper functions to perform basic arithmetic (without parseFloat or eval)
function add(a, b) {
  return (a * 1) + (b * 1); // Implicit conversion to number
}

function subtract(a, b) {
  return (a * 1) - (b * 1); // Implicit conversion to number
}

function multiply(a, b) {
  return (a * 1) * (b * 1); // Implicit conversion to number
}

function divide(a, b) {
  return (a * 1) / (b * 1); // Implicit conversion to number
}
