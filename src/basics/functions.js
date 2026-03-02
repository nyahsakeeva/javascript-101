/*
FUNCTIONS

Definition:
Functions are reusable blocks of code that perform a specific task.
They can accept inputs (parameters), return values, and be reused
throughout a program.

In JavaScript, functions are first-class citizens:
- they can be assigned to variables
- passed as arguments
- returned from other functions
*/

// Function declaration
function add(a, b) {
  return a + b;
}

// Function expression
const multiply = function (a, b) {
  return a * b;
};

// Arrow function
const subtract = (a, b) => a - b;

const sumResult = add(2, 3);        // 5
const productResult = multiply(2, 3); // 6
const diffResult = subtract(5, 2);  // 3

// Practice 1
// Use default parameters and string interpolation

function greet(name = "Guest") {
  return `Hello, ${name}`;
}

const greeting1 = greet("Altynai");
const greeting2 = greet();

// Expected:
// greeting1 -> "Hello, Altynai"
// greeting2 -> "Hello, Guest"


// Practice 2
// Functions returning functions (closure)

function makeMultiplier(factor) {
  return function (value) {
    return value * factor;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

const d1 = double(4); // 8
const d2 = triple(4); // 12


// Practice 3
// Functions as arguments (higher-order functions)

function applyOperation(a, b, operation) {
  return operation(a, b);
}

const r1 = applyOperation(10, 5, add);       // 15
const r2 = applyOperation(10, 5, subtract);  // 5
const r3 = applyOperation(10, 5, multiply);  // 50