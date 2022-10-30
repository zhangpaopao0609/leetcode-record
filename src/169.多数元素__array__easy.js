/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  const nl = nums.length;
  if (nl === 1) return nums[0];
  const l = nums.length >> 1;
  const m = new Map();
  for (const n of nums) {
    if (m.has(n)) {
      const mn = m.get(n);
      if (mn + 1 > l) return n;
      m.set(n, mn + 1);
    } else {
      m.set(n, 1);
    }
  }
};
// @lc code=end

// hash table
const majorityElement_v1 = function (nums) {
  const nl = nums.length;
  if (nl === 1) return nums[0];
  const l = nums.length >> 1;
  const m = new Map();
  for (const n of nums) {
    if (m.has(n)) {
      const mn = m.get(n);
      if (mn + 1 > l) return n;
      m.set(n, mn + 1);
    } else {
      m.set(n, 1);
    }
  }
};

// 排序
const majorityElement_v2 = function (nums) {
  const n = nums.sort();
  return n[n.length >> 1];
};

// 分治的思想
// 众数一定是左侧或者右侧的的众数
// 左侧的众数和右侧的众数

const majorityElement_v3 = function (nums) {};
