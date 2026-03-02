/*
OBJECTS

Definition:
Objects store data as key–value pairs.
They are reference types and can contain nested structures.
*/

// Example
const userObj = {
  id: 1,
  name: "John",
  address: {
    city: "Chicago",
    zip: "60601"
  }
};

const userName = userObj.name;
const city = userObj.address.city;

// Practice 1
const settings = { theme: "dark", language: "en" };
settings.language = "es";

// Practice 2
const defaults = { theme: "light", language: "en" };
const userSettings = { theme: "dark" };
const mergedSettings = { ...defaults, ...userSettings };

// Practice 3
const profile = {
  name: "Anna",
  contact: {
    email: "a@example.com"
  }
};

const safePhone = profile.contact?.phone ?? "Not provided";
const safeEmail = profile.contact?.email ?? "Not provided";