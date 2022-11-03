/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  const l = nums.length;
  let prev = nums[0];
  let max = prev;
  let now = null;

  for (let i = 1; i < l; i++) {
    now = prev > 0 ? prev + nums[i] : nums[i];
    max = now > max ? now : max;
    prev = now;
  }

  return max;
};
// @lc code=end

const maxSubArray_v1 = function (nums) {
  // dp[i] 是已 i 为结尾的最大子数组的和
  // dp[i+1] 要么是它自己 nums[i+1] 一个，要么是  dp[i] + nums[i+1]
  const l = nums.length;
  const dp = new Array(l).fill(0);
  dp[0] = nums[0];

  for (let i = 1; i < l; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
  }

  return dp[l - 1];
};

const maxSubArray_v2 = function (nums) {
  // dp[i] 是已 i 为结尾的最大子数组的和
  // dp[i+1] 要么是它自己 nums[i+1] 一个，要么是  dp[i] + nums[i+1]
  const l = nums.length;
  let prev = nums[0];
  let max = prev;
  let now = null;

  for (let i = 1; i < l; i++) {
    now = prev > 0 ? prev + nums[i] : nums[i];
    max = now > max ? now : max;
    prev = now;
  }

  return max;
};
