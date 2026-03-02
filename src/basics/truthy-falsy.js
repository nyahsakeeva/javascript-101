/*
TRUTHY / FALSY

Definition:
In boolean contexts (if, while, ternary), values are coerced to true/false.
Falsy values are:
false, 0, -0, 0n, "", null, undefined, NaN
Everything else is truthy.
*/

// Example
const a = Boolean("text"); // true
const b = Boolean("");     // false

// Practice 1
const inputs1 = ["", "0", 0, 1, null, undefined, NaN];
const bools1 = inputs1.map(v => Boolean(v));

// Practice 2
const value = "";
const fallback = value || "default"; // "default"

// Practice 3
const maybeCount = 0;
const safeCount = (maybeCount ?? 10); // 0 (nullish coalescing preserves 0)