/*
DATA TYPES

Definition:
JavaScript has primitive and reference data types.

Primitive:
string, number, boolean, null, undefined, symbol, bigint

Reference:
object, array, function
*/

// Example
const text = "hello";
const count = 10;
const active = true;
const empty = null;
let notDefined;

const user = { id: 1, name: "Anna" };
const numbers = [1, 2, 3];

// Practice 1
const values1 = [text, count, active];
const types1 = values1.map(v => typeof v);

// Practice 2
const values2 = [empty, notDefined, numbers, user];
const types2 = values2.map(v => {
  if (v === null) return "null";
  if (Array.isArray(v)) return "array";
  return typeof v;
});

// Practice 3
const values3 = ["x", 0, false, "", null, undefined, [], {}, () => {}];

const deepTypes = values3.map(v => {
  if (v === null) return "null";
  if (Array.isArray(v)) return "array";
  if (typeof v === "function") return "function";
  return typeof v;
});