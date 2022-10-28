/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  if (n <= 1) return 1;
  let p1 = 1;
  let p2 = 2;
  for (let i = 3; i <= n; i++) {
    const temp = p1 + p2;
    p1 = p2;
    p2 = temp;
  }
  return p2;
};
// @lc code=end

// 动态规划
const climbStairs_v1 = function (n) {
  const dp = [];
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

// 动态规划 减小空间复杂度
const climbStairs_v2 = function (n) {
  if (n <= 1) return 1;
  let p1 = 1;
  let p2 = 2;
  for (let i = 3; i <= n; i++) {
    const temp = p1 + p2;
    p1 = p2;
    p2 = temp;
  }
  return p2;
};
