/*
ARRAYS

Definition:
Arrays store ordered collections of values and provide
methods for transforming and querying data.
*/

// Example
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
const evenNumbers = numbers.filter(n => n % 2 === 0);
const total = numbers.reduce((sum, n) => sum + n, 0);

// Practice 1
const names = ["anna", "john", "kate"];
const capitalized = names.map(n => n[0].toUpperCase() + n.slice(1));

// Practice 2
const scores = [10, 15, 20, 15];
const uniqueScores = [...new Set(scores)];
const average = scores.reduce((s, n) => s + n, 0) / scores.length;

// Practice 3
const people = [
  { name: "A", age: 20 },
  { name: "B", age: 20 },
  { name: "C", age: 30 }
];

const groupedByAge = people.reduce((acc, person) => {
  const key = String(person.age);
  acc[key] = acc[key] ?? [];
  acc[key].push(person);
  return acc;
}, {});