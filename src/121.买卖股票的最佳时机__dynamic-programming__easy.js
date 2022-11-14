/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const l = prices.length - 1;
  let v = 0;
  let max = v;
  for (let i = l; i > 0; i--) {
    const t = prices[i] - prices[i - 1];
    u = v > 0 ? t + v : t;
    if (u > max) max = u;
    v = u;
  }

  return max;
};
// @lc code=end

// dp[i] 第 i 天买入的最大利润
// dp[i] 其实就是从第 i 天到最后，这一段中的 最大值-prices[i]
// dp[i-1] 就是从第 i-1 天到最后，这一段中的 最大值-prices[i-1]
// 所以，从第 i-1 天到最后这一段的最大值只有可能是两个值：
// - 第一个是 从第 i 天到最后中的最大值，就等于 dp[i]+prices[i]
// - 第二个就是 prices[i]，
// 所以，用这两个值分别减去 prices[i-1]，得到的最大值就是最大利润了
//
const maxProfit_v1 = function (prices) {
  const l = prices.length - 1;
  const dp = [];
  dp[l] = 0;
  for (let i = l; i > 0; i--) {
    dp[i - 1] = Math.max(
      prices[i] + dp[i] - prices[i - 1],
      prices[i] - prices[i - 1]
    );
  }
  let max = -1;
  for (let i = 0; i <= l; i++) {
    if (dp[i] > max) max = dp[i];
  }
  return max;
};

const maxProfit_v2 = function (prices) {
  const l = prices.length - 1;
  let v = 0;
  let max = v;
  for (let i = l; i > 0; i--) {
    const m = prices[i];
    const n = prices[i - 1];
    u = Math.max(m + v - n, m - n);
    if (u > max) max = u;
    v = u;
  }

  return max;
};

const maxProfit_v3 = function (prices) {
  const l = prices.length - 1;
  let v = 0;
  let max = v;
  for (let i = l; i > 0; i--) {
    const t = prices[i] - prices[i - 1];
    u = v > 0 ? t + v : t;
    if (u > max) max = u;
    v = u;
  }

  return max;
};
