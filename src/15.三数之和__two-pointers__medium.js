/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 双指针
const threeSum = function (nums) {
  const res = [];
  const len = nums.length;
  // 对数组排序
  const sorted = nums.sort((a, b) => a - b);

  for (let i = 0; i < len - 2; i++) {
    // 与前一个相同，直接跳过
    if (i > 0 && sorted[i] === sorted[i - 1]) continue;
    let k = len - 1;
    const reset = -sorted[i];
    for (let j = i + 1; j < len - 1; j++) {
      // 与前一个相同，直接跳过
      if (j > i + 1 && sorted[j] === sorted[j - 1]) continue;
      // 如果未越界同时大于，k--
      while (j < k && sorted[j] + sorted[k] > reset) {
        k--;
      }
      // 如果越界了，直接跳出
      if (j >= k) break;
      // 如果相等，那么放入结果
      if (sorted[j] + sorted[k] === reset) {
        res.push([sorted[i], sorted[j], sorted[k]]);
      }
    }
  }

  return res;
};
// @lc code=end
