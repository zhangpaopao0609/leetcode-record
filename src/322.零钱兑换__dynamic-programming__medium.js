/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    let min = Infinity;
    for (const coin of coins) {
      const n = i - coin;
      if (n >= 0 && dp[n] < min) {
        min = dp[n];
      }
    }
    dp[i] = min + 1;
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};
// @lc code=end

// 有点生硬了，因为知道是 dp，所以做起来不自觉得就会朝着这个方向想
// dp[i] 凑 i 所需要的最少硬币
// dp[i] = Math.min(dp[i-coins[0....]]) + 1
// dp[0] = 0
const coinChange_v1 = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    let min = Infinity;
    for (const coin of coins) {
      const n = i - coin;
      if (n >= 0 && dp[n] < min) {
        min = dp[n];
      }
    }
    dp[i] = min + 1;
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};
