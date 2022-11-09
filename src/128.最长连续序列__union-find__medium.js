/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {
  const s = new Set(nums);
  let max = 0;

  for (const n of s) {
    // 如果 n-1 在 s 中
    if (s.has(n - 1)) continue;
    // 如果 n + 1 在 s 中
    let l = 1;
    while (s.has(n + l)) {
      l++;
    }
    max = Math.max(max, l);
  }

  return max;
};
// @lc code=end

const longestConsecutive_v1 = function (nums) {
  const s = new Set(nums);
  let max = 0;

  for (const n of s) {
    // 如果 n-1 在 s 中
    if (s.has(n - 1)) continue;
    // 如果 n + 1 在 s 中
    let l = 1;
    while (s.has(n + l)) {
      l++;
    }
    max = Math.max(max, l);
  }

  return max;
};
