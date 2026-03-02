import { describe, it, expect, vi } from "vitest";
import { debounce } from "../src/patterns/.debounce.js";

describe("debounce", () => {
  it("calls function once after wait time", () => {
    vi.useFakeTimers();

    const fn = vi.fn();
    const d = debounce(fn, 200);

    d(1);
    d(2);
    d(3);

    expect(fn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(200);

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith(3);

    vi.useRealTimers();
  });
});