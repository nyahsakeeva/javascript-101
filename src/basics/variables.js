/*
VARIABLES

Definition:
Variables store values that can be reused and updated.
JavaScript supports var, let, and const.

- const: block-scoped, cannot be reassigned
- let: block-scoped, can be reassigned
- var: function-scoped, hoisted (avoid in modern JS)
*/

// Example
const language = "JavaScript";
let version = 1;
version += 1;

// Practice 1
const projectName = "JS Basics";
let visitors = 0;
visitors += 5;

// Practice 2
const price = 19.99;
const taxRate = 0.1;
let total = price + price * taxRate;
total = Number(total.toFixed(2)); // 21.99

// Practice 3
const items = [10, 15, 20];
const discountRate = 0.2;

let subtotal = 0;
for (const n of items) subtotal += n;

let discountedSubtotal = subtotal - subtotal * discountRate;
discountedSubtotal = Number(discountedSubtotal.toFixed(2));