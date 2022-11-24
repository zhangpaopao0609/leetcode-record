/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 典型的 dp
// 利用滚动数组来减小空间复杂度
// 当然，因为行列无关，所以完全可以用较小的做为列，这样空间复杂度更小
const uniquePaths = function (m, n) {
  if (m < n) {
    const temp = n;
    n = m;
    m = temp;
  }
  const dp_i = new Array(n).fill(1);
  const dp_i_1 = new Array(n).fill(0);

  for (let i = 0; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp_i[j] = dp_i_1[j] + dp_i[j - 1];
      dp_i_1[j] = dp_i[j];
    }
  }

  return dp_i[n - 1];
};
// @lc code=end

// 典型的 dp
// dp[i][j] = dp[i-1][j] + dp[i][j-1]
// dp[0][...] = 1
const uniquePaths_v1 = function (m, n) {
  const dp = new Array(m).fill(-1).map(() => new Array(n).fill(-1));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  return dp[m - 1][n - 1];
};
