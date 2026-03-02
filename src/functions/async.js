export * from "./async.js";

// Async-related functions

export function delay(value, ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), ms);
  });
}

export async function delayedUppercase(text) {
  const result = await delay(text, 50);
  return result.toUpperCase();
}