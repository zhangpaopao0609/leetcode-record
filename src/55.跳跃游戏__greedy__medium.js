/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function (nums) {
  let d = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > d) return false;
    d = Math.max(d, i + nums[i]);
  }
  return true;
};
// @lc code=end

// 每一个格子都能跳
// 记录每一个格子能跳的最远距离
const canJump_v1 = function (nums) {
  let d = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > d) return false;
    d = Math.max(d, i + nums[i]);
  }
  return true;
};
