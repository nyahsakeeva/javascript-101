

// Two Sum (hash map)
export function twoSum(nums, target) {
  const seen = new Map(); // number -> index

  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (seen.has(need)) return [seen.get(need), i];
    seen.set(nums[i], i);
  }

  return null;
}

// Best Time to Buy and Sell Stock (single pass)
export function maxProfit(prices) {
  let minPrice = Infinity;
  let best = 0;

  for (const price of prices) {
    if (price < minPrice) minPrice = price;
    else best = Math.max(best, price - minPrice);
  }

  return best;
}

// Maximum Subarray (Kadane’s Algorithm)
export function maxSubarray(nums) {
  let best = -Infinity;
  let current = 0;

  for (const n of nums) {
    current = Math.max(n, current + n);
    best = Math.max(best, current);
  }

  return best;
}

// Merge Intervals
export function mergeIntervals(intervals) {
  if (!intervals.length) return [];

  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);
  const result = [sorted[0]];

  for (let i = 1; i < sorted.length; i++) {
    const [start, end] = sorted[i];
    const last = result[result.length - 1];

    if (start <= last[1]) {
      last[1] = Math.max(last[1], end);
    } else {
      result.push([start, end]);
    }
  }

  return result;
}

// Product of Array Except Self (prefix + suffix)
export function productExceptSelf(nums) {
  const n = nums.length;
  const res = new Array(n).fill(1);

  let prefix = 1;
  for (let i = 0; i < n; i++) {
    res[i] *= prefix;
    prefix *= nums[i];
  }

  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= suffix;
    suffix *= nums[i];
  }

  return res;
}

// 3Sum (sort + two pointers)
export function threeSum(nums) {
  const arr = [...nums].sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < arr.length - 2; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];

      if (sum === 0) {
        result.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;

        while (left < right && arr[left] === arr[left - 1]) left++;
        while (left < right && arr[right] === arr[right + 1]) right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}