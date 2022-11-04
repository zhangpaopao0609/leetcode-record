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
const threeSum = function (nums) {
  const res = [];
  const l = nums.length;
  let sn = nums.sort((a, b) => a - b);
  for (let i = 0; i < l - 2; i++) {
    // 与上一个相同直接略过
    if (i > 0 && sn[i] === sn[i - 1]) continue;
    let k = l - 1;
    for (let j = i + 1; j < k; j++) {
      // 与上一个相同直接略过
      if (j > i + 1 && sn[j] === sn[j - 1]) continue;

      while (j < k && sn[i] + sn[j] + sn[k] > 0) {
        k--;
      }

      if (sn[i] + sn[j] + sn[k] === 0 && j !== k) {
        res.push([sn[i], sn[j], sn[k]]);
      }
    }
  }

  return res;
};
// @lc code=end

const threeSum_v1 = function (nums) {
  const res = [];
  const l = nums.length;
  let sn = nums.sort((a, b) => a - b);
  for (let i = 0; i < l - 2; i++) {
    // 与上一个相同直接略过
    if (i > 0 && sn[i] === sn[i - 1]) continue;
    let k = l - 1;
    for (let j = i + 1; j < k; j++) {
      // 与上一个相同直接略过
      if (j > i + 1 && sn[j] === sn[j - 1]) continue;

      while (j < k && sn[i] + sn[j] + sn[k] > 0) {
        k--;
      }

      if (sn[i] + sn[j] + sn[k] === 0 && j !== k) {
        res.push([sn[i], sn[j], sn[k]]);
      }
    }
  }

  return res;
};
