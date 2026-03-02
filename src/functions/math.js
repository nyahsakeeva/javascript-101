export * from "./math.js";


// Math-related functions

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function isEven(number) {
  return number % 2 === 0;
}

export function sum(numbers) {
  let total = 0;
  for (const n of numbers) total += n;
  return total;
}

export function average(numbers) {
  if (!numbers.length) return 0;
  return sum(numbers) / numbers.length;
}