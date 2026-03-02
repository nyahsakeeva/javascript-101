/*
LOOPS

Definition:
Loops repeat actions. Common patterns:
for, for...of, while, and array iteration methods.
*/

// Example
const nums = [1, 2, 3];
let sumNums = 0;
for (const n of nums) sumNums += n;

// Practice 1
const list1 = ["a", "b", "c"];
const joined1 = [];
for (let i = 0; i < list1.length; i++) {
  joined1.push(list1[i].toUpperCase());
}

// Practice 2
const list2 = [5, 10, 15];
const doubled2 = [];
let idx = 0;
while (idx < list2.length) {
  doubled2.push(list2[idx] * 2);
  idx += 1;
}

// Practice 3
const data = [
  { name: "A", active: true },
  { name: "B", active: false },
  { name: "C", active: true }
];
const activeNames = data.filter(x => x.active).map(x => x.name);