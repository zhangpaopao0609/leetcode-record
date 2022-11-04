/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  let max = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === "1") {
        if (i === 0 || j === 0) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        }
        max = dp[i][j] > max ? dp[i][j] : max;
      }
    }
  }
  return max * max;
};
// @lc code=end

const maximalSquare_v1 = function (matrix) {
  // dp[i][j] 以 matrix[i][j] 为右下角的最长边
  // 如果 matrix[i][j] = 0  dp[i][j] = 0
  // 如果 matrix[i][j] = 1 这时候就由它的左边，上边和左上角决定了
  // dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
  // dp[0][j] = 1 （当然，还是在 1 的情况下）
  // dp[i][0] = 1 （当然，还是在 1 的情况下）
  const m = matrix.length;
  const n = matrix[0].length;
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  let max = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === "1") {
        if (i === 0 || j === 0) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        }
        max = dp[i][j] > max ? dp[i][j] : max;
      }
    }
  }
  return max * max;
};
