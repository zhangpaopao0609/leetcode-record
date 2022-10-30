/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  let s = 0;
  for (const n of nums) {
    s ^= n;
  }

  return s;
};
// @lc code=end

// hash table
const singleNumber_v1 = function (nums) {
  const s = new Set();
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (s.has(n)) {
      s.delete(n);
    } else {
      s.add(n);
    }
  }

  return [...s][0];
};

// 位运算，异或
// a ^ 0 = a
// a ^ a = 0
// a ^ b ^ c = a ^ (b ^ c)
const singleNumber_v2 = function (nums) {
  let s = 0;
  for (const n of nums) {
    s ^= n;
  }

  return s;
};
