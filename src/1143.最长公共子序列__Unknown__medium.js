/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = function (text1, text2) {
  const l1 = text1.length;
  const l2 = text2.length;
  const dp = new Array(l1 + 1).fill(0).map(() => new Array(l2 + 1).fill(0));

  for (let i = 1; i <= l1; i++) {
    for (let j = 1; j <= l2; j++) {
      if (text1.charAt(i - 1) === text2.charAt(j - 1)) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[l1][l2];
};
// @lc code=end

// 自顶向下
const longestCommonSubsequence_v1 = function (text1, text2) {
  // 定义 dp
  // dp(s1, i, s2, j) 为 s1[i, ...] 和 s2[j, ...] 之间的最长公共子序列
  const l1 = text1.length;
  const l2 = text2.length;
  const memo = new Array(l1).fill(-1).map(() => new Array(l2).fill(-1));

  const dp = function (s1, i, s2, j) {
    // base case
    if (i === l1 || j === l2) {
      return 0;
    }

    if (memo[i][j] !== -1) {
      return memo[i][j];
    }

    const n1 = s1.charAt(i);
    const n2 = s2.charAt(j);
    let ns = 0;
    if (n1 === n2) {
      ns = 1 + dp(s1, i + 1, s2, j + 1);
    } else {
      ns = Math.max(dp(s1, i, s2, j + 1), dp(s1, i + 1, s2, j));
    }
    memo[i][j] = ns;
    return ns;
  };

  return dp(text1, 0, text2, 0);
};

// 自底向上
const longestCommonSubsequence_v2 = function (text1, text2) {
  // 定义 dp数组
  // dp[i][j] 是 s1[0, ..., i] 和 s2[0, ..., j] 之间的最长公共子序列
  // 这里的 i j 是指位置
  // dp[...][0] === 0
  // dp[0][...] === 0
  const l1 = text1.length;
  const l2 = text2.length;
  const dp = new Array(l1 + 1).fill(0).map(() => new Array(l2 + 1).fill(0));

  for (let i = 1; i <= l1; i++) {
    for (let j = 1; j <= l2; j++) {
      if (text1.charAt(i - 1) === text2.charAt(j - 1)) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[l1][l2];
};
