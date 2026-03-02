export * from "./strings.js";


// String-related functions

export function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

export function formatPrice(amount, currency = "USD") {
  if (typeof amount !== "number" || Number.isNaN(amount)) {
    return "Invalid amount";
  }
  return `${currency} ${amount.toFixed(2)}`;
}

export function capitalize(text) {
  if (!text) return "";
  return text[0].toUpperCase() + text.slice(1);
}