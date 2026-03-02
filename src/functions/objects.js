export * from "./objects.js";

// Object-related functions

export function getNestedValue(object, path, fallback = undefined) {
  const keys = path.split(".");
  let current = object;

  for (const key of keys) {
    if (current == null) return fallback;
    current = current[key];
  }

  return current ?? fallback;
}