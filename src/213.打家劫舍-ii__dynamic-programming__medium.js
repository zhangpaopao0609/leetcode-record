/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
  const l = nums.length;
  if (l === 1) return nums[0];
  const robRange = function (nums, start, end) {
    let dp_0 = 0;
    let dp_1 = 0;
    let dp_2 = 0;

    for (let i = end; i >= start; i--) {
      dp_0 = Math.max(dp_1, dp_2 + nums[i]);
      dp_2 = dp_1;
      dp_1 = dp_0;
    }
    return dp_0;
  };
  return Math.max(robRange(nums, 0, l - 2), robRange(nums, 1, l - 1));
};
// @lc code=end

// dp[i] 从第 i 个房子开始，所能得到的最大值
// dp[i] = max(dp[i+2] + nums[i], dp[i-1])
// 有环意味着第一个和最后一个房子不能同时抢，把第一个添加到最后，这样
const rob_v1 = function (nums) {
  const l = nums.length;
  if (l === 1) return nums[0];
  const robRange = function (nums, start, end) {
    let dp_0 = 0;
    let dp_1 = 0;
    let dp_2 = 0;

    for (let i = end; i >= start; i--) {
      dp_0 = Math.max(dp_1, dp_2 + nums[i]);
      dp_2 = dp_1;
      dp_1 = dp_0;
    }
    return dp_0;
  };
  return Math.max(robRange(nums, 0, l - 2), robRange(nums, 1, l - 1));
};
