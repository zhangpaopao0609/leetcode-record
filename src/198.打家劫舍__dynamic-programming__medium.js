/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
  const l = nums.length;
  const dp = new Array(l + 2).fill(0);
  for (let i = l - 1; i >= 0; i--) {
    dp[i] = Math.max(dp[i + 2] + nums[i], dp[i + 1]);
  }
  return dp[0];
};
// @lc code=end

// dp[i]
// 偷或者不偷这间房子的最大值 dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1])
const rob_v1 = function (nums) {
  const l = nums.length;
  const dp = new Array(l).fill(0);
  if (l === 0) return 0;
  if (l === 1) return nums[0];
  if (l === 2) return Math.max(nums[0], nums[1]);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < l; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }
  return dp[l - 1];
};

const rob_v2 = function (nums) {
  const l = nums.length;
  const dp = new Array(l + 2).fill(0);
  for (let i = l - 1; i >= 0; i--) {
    dp[i] = Math.max(dp[i + 2] + nums[i], dp[i + 1]);
  }
  return dp[0];
};

const rob_v3 = function (nums) {
  const l = nums.length;
  let dp_0 = 0;
  let dp_1 = 0;
  let dp_2 = 0;
  for (let i = l - 1; i >= 0; i--) {
    dp_0 = Math.max(dp_2 + nums[i], dp_1);
    dp_2 = dp_1;
    dp_1 = dp_0;
  }
  return dp_0;
};
