/*
STRINGS

Definition:
Strings represent text. Common operations include concatenation, interpolation,
searching, slicing, and formatting.
*/

// Example
const firstName = "Altynai";
const lastName = "Sakeeva";
const fullName = `${firstName} ${lastName}`;

// Practice 1
const raw = "  hello world  ";
const trimmed = raw.trim();
const upper = trimmed.toUpperCase();

// Practice 2
const email = "user@example.com";
const atIndex = email.indexOf("@");
const domain = email.slice(atIndex + 1);

// Practice 3
const sentence = "JavaScript makes web apps interactive";
const words = sentence.split(" ");
const kebab = words.join("-").toLowerCase();