export * from "./arrays.js";


// Array-related functions

export function transform(items, mapper) {
  const result = [];
  for (const item of items) {
    result.push(mapper(item));
  }
  return result;
}

export function unique(arr) {
  return [...new Set(arr)];
}