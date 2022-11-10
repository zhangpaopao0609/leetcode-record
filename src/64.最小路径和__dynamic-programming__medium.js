/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) continue;
      else if (i === 0) grid[0][j] += grid[0][j - 1];
      else if (j === 0) grid[i][0] += grid[i - 1][0];
      else grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }

  return grid[m - 1][n - 1];
};
// @lc code=end

// dp[i][j] 走到 ij 的最小路径和
// dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
// dp[0][j] = dp[0][j-1] + grid[0][j]
// dp[i][0] = dp[i-1][0] + grid[i][0]
// dp[0][0] = grid[0][0]
const minPathSum_v1 = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dp = new Array(m).fill(-1).map(() => new Array(n));
  dp[0][0] = grid[0][0];

  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }

  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }

  return dp[m - 1][n - 1];
};

// 直接利用原数组作为 dp
const minPathSum_v2 = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) continue;
      else if (i === 0) grid[0][j] += grid[0][j - 1];
      else if (j === 0) grid[i][0] += grid[i - 1][0];
      else grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }

  return grid[m - 1][n - 1];
};
