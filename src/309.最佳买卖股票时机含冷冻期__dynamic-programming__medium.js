/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  const l = prices.length;
  let dp_i_0 = 0;
  let dp_i_1 = 0;
  let dp_i__2_0 = 0;

  for (let i = 0; i < l; i++) {
    if (i - 1 === -1) {
      dp_i_0 = 0;
      dp_i_1 = -prices[i];
      continue;
    }
    if (i - 2 === -1) {
      dp_i_0 = Math.max(0, dp_i_1 + prices[i]);
      dp_i_1 = Math.max(dp_i_1, -prices[i]);
      continue;
    }
    let temp = dp_i_0;
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
    dp_i_1 = Math.max(dp_i_1, dp_i__2_0 - prices[i]);
    dp_i__2_0 = temp;
  }

  return dp_i_0;
};
// @lc code=end
// 每天的三个选择：买入、卖出、冷冻，但是买入前必须要是已卖出，卖出前必须是已买入
// 三个状态：天 i 交易最大限制 k 是否持有股票 is
// dp[i][k][is]
// dp[i][k][0] = Math.max(dp[i-1][k][0], dp[i-1][k-1][1] + prices[i])
// 今天没有股票了           昨天也没有        昨天有然后今天卖出
// dp[i][k][1] = Math.max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i])
// 今天有股票了             昨天也有         昨天没有然后今天买入

// base case
// dp[-1][...][0] = dp[...][0][0] = 0
// dp[-1][...][1] = dp[...][0][1] = -Infinity

// 本题， k 为无限，有冷冻期一天
// dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i])
// 今天没有股票了           昨天也没有        昨天有然后今天卖出
// dp[i][1] = Math.max(dp[i-1][1], dp[i-2][0] - prices[i])
// 今天有股票了             昨天也有         前天没有然后今天买入
const maxProfit_v1 = function (prices) {
  const l = prices.length;
  const dp = new Array(l).fill(-1).map(() => new Array(2).fill(0));

  for (let i = 0; i < l; i++) {
    if (i - 1 === -1) {
      dp[i][0] = 0;
      dp[i][1] = -prices[i];
      continue;
    }
    if (i - 2 === -1) {
      dp[i][0] = Math.max(0, dp[0][1] + prices[i]);
      dp[i][1] = Math.max(dp[0][1], -prices[i]);
      continue;
    }

    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i]);
  }

  return dp[l - 1][0];
};

const maxProfit_v2 = function (prices) {
  const l = prices.length;
  let dp_i_0 = 0; // dp[i][0]
  let dp_i_1 = 0; // dp[i][1]
  let dp_i__2_0 = 0; // dp[i-2][0]

  for (let i = 0; i < l; i++) {
    if (i - 1 === -1) {
      dp_i_0 = 0;
      dp_i_1 = -prices[i];
      continue;
    }
    if (i - 2 === -1) {
      dp_i_0 = Math.max(0, dp_i_1 + prices[i]);
      dp_i_1 = Math.max(dp_i_1, -prices[i]);
      continue;
    }
    let temp = dp_i_0; // 这里还是 i-1 天的
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
    dp_i_1 = Math.max(dp_i_1, dp_i__2_0 - prices[i]);
    dp_i__2_0 = temp;
    // 这里我想了很久耶，蛮巧妙的，这里是 i - 1 天的；
    // 当下次再循环的时候，dp_i_1 = Math.max(dp_i_1, dp_i__2_0 - prices[i]); 中的 dp_i__2_0 就是 i-2 了
  }

  return dp_i_0;
};
