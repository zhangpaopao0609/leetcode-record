/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const map = new Map();
  const l = nums.length;
  for (let i = 0; i < l; i++) {
    const n = nums[i];
    const rest = target - n;
    if (map.has(n)) {
      return [map.get(n), i];
    } else {
      map.set(rest, i);
    }
  }
};

// @lc code=end

// 双循环，O(n2)
const twoSum_v1 = function (nums, target) {
  const l = nums.length;
  for (let i = 0; i < l; i++) {
    const n = nums[i];
    for (let j = i + 1; j < l; j++) {
      const m = nums[j];
      if (n + m === target) return [i, j];
    }
  }
};

// hash 表存储 O(n)
const twoSum_v2 = function (nums, target) {
  const map = new Map();
  const l = nums.length;
  for (let i = 0; i < l; i++) {
    const n = nums[i];
    const rest = target - n;
    if (map.has(n)) {
      return [map.get(n), i];
    } else {
      map.set(rest, i);
    }
  }
};
