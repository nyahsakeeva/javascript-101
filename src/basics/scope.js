/*
SCOPE

Definition:
Scope determines where variables are accessible.
JavaScript has global, function, and block scope.
*/

// Example
let globalValue = "global";

if (true) {
  let blockValue = "block";
  globalValue = blockValue;
}

// Practice 1
let result1 = 0;
function addOne() {
  result1 += 1;
}
addOne();
addOne();

// Practice 2
function makeCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}

const counter = makeCounter();
const c1 = counter(); // 1
const c2 = counter(); // 2

// Practice 3
function makePrefixer(prefix) {
  return function (text) {
    return `${prefix}${text}`;
  };
}

const errorPrefix = makePrefixer("Error: ");
const warnPrefix = makePrefixer("Warning: ");

const msg1 = errorPrefix("Not found");
const msg2 = warnPrefix("Slow response");
