/*
 * @lc app=leetcode.cn id=583 lang=javascript
 *
 * [583] 两个字符串的删除操作
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = function (word1, word2) {
  const l1 = word1.length;
  const l2 = word2.length;
  const big = l1 + l2 + 1;
  const memo = new Array(l1 + 1)
    .fill(big)
    .map(() => new Array(l2 + 1).fill(big));

  const dp = function (s1, i, s2, j) {
    if (i === 0 || j === 0) {
      return i || j;
    }
    if (memo[i][j] !== big) {
      return memo[i][j];
    }
    if (s1.charAt(i - 1) === s2.charAt(j - 1)) {
      memo[i][j] = dp(s1, i - 1, s2, j - 1);
    } else {
      memo[i][j] = Math.min(
        dp(s1, i - 1, s2, j) + 1,
        dp(s1, i, s2, j - 1) + 1,
        dp(s1, i - 1, s2, j - 1) + 2
      );
    }

    return memo[i][j];
  };

  return dp(word1, l1, word2, l2);
};
// @lc code=end

const minDistance_v1 = function (word1, word2) {
  // dp(s1, i, s2, j) s1 0-i 和 s2 0-j 删除后相同的最小操作数
  // s1 0-i 和 s2 0-j
  // 如果 s1[i] === s2[j]，那就等于 dp(s1, i-1, s2, j-1)
  // 否者 要么删除一个，要么两个都删除的最小值
  const l1 = word1.length;
  const l2 = word2.length;
  const big = l1 + l2 + 1;
  const memo = new Array(l1 + 1)
    .fill(big)
    .map(() => new Array(l2 + 1).fill(big));

  const dp = function (s1, i, s2, j) {
    if (i === 0 || j === 0) {
      return i || j;
    }
    if (memo[i][j] !== big) {
      return memo[i][j];
    }
    if (s1.charAt(i - 1) === s2.charAt(j - 1)) {
      memo[i][j] = dp(s1, i - 1, s2, j - 1);
    } else {
      memo[i][j] = Math.min(
        dp(s1, i - 1, s2, j) + 1,
        dp(s1, i, s2, j - 1) + 1,
        dp(s1, i - 1, s2, j - 1) + 2
      );
    }

    return memo[i][j];
  };

  return dp(word1, l1, word2, l2);
};
// 还可以用最长公共子序列哟
// l1 - lcs + l2 - lcs

