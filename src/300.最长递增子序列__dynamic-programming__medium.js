/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function (nums) {
  const l = nums.length;
  const dp = new Array(l).fill(1);
  let max = 1;
  for (let i = 1; i < l; i++) {
    const n = nums[i];
    let m = 0;
    for (let j = 0; j < i; j++) {
      if (nums[j] < n) {
        m = Math.max(m, dp[j]);
      }
    }
    dp[i] = m + 1;
    max = Math.max(max, dp[i]);
  }

  return max;
};
// @lc code=end

// O(N^2)
const lengthOfLIS_v1 = function (nums) {
  const l = nums.length;
  const dp = new Array(l).fill(1);
  let max = 1;
  for (let i = 1; i < l; i++) {
    const n = nums[i];
    let m = 0;
    for (let j = 0; j < i; j++) {
      if (nums[j] < n) {
        m = Math.max(m, dp[j]);
      }
    }
    dp[i] = m + 1;
    max = Math.max(max, dp[i]);
  }

  return max;
};

const lengthOfLIS_v2 = function (nums) {
  const l = nums.length;
  const dp = new Array(l).fill(1);
  let max = 1;
  for (let i = 1; i < l; i++) {
    const n = nums[i];
    let m = 0;
    for (let j = 0; j < i; j++) {
      if (nums[j] < n) {
        m = Math.max(m, dp[j]);
      }
    }
    dp[i] = m + 1;
    max = Math.max(max, dp[i]);
  }

  return max;
};