/*
OPERATORS

Definition:
Operators perform computations and comparisons.
Common categories: arithmetic, comparison, logical, nullish, ternary.
*/

// Example
const sum = 2 + 3;
const isGreater = 10 > 5;
const andResult = true && false;

// Practice 1
const x = 7;
const y = 3;
const arithmetic = {
  add: x + y,
  sub: x - y,
  mul: x * y,
  div: x / y,
  mod: x % y
};

// Practice 2
const score = 85;
const grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";

// Practice 3
const input = "";
const normalized = (input?.trim() ?? "").toLowerCase();
const finalValue = normalized || "n/a";