import { describe, it, expect } from "vitest";

/**
 * BASIC JAVASCRIPT CONCEPTS
 *
 * These tests validate expected JavaScript behavior.
 * They are intentionally simple and educational.
 */

describe("JavaScript basics", () => {
  it("supports let and const correctly", () => {
    let value = 1;
    value = 2;

    const constant = 10;

    expect(value).toBe(2);
    expect(constant).toBe(10);
  });

  it("distinguishes primitive and reference types", () => {
    const a = 10;
    const b = a;
    const obj1 = { count: 1 };
    const obj2 = obj1;

    obj2.count = 2;

    expect(b).toBe(10);          // primitive copied by value
    expect(obj1.count).toBe(2);  // object copied by reference
  });

  it("uses strict equality correctly", () => {
    expect(5 == "5").toBe(true);
    expect(5 === "5").toBe(false);
  });

  it("supports block scope with let", () => {
    let result;

    if (true) {
      let scoped = 42;
      result = scoped;
    }

    expect(result).toBe(42);
  });
});