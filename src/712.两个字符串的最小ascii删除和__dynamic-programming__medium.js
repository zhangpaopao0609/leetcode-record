/*
 * @lc app=leetcode.cn id=712 lang=javascript
 *
 * [712] 两个字符串的最小ASCII删除和
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
const minimumDeleteSum = function (word1, word2) {
  const l1 = word1.length;
  const l2 = word2.length;
  const big = l1 + l2 + 1;
  const memo = new Array(l1 + 1)
    .fill(big)
    .map(() => new Array(l2 + 1).fill(big));

  const dp = function (s1, i, s2, j) {
    let res = 0;
    if (i === 0) {
      for (; j > 0; j--) {
        res += s2.charCodeAt(j - 1);
      }
      return res;
    }
    if (j === 0) {
      for (; i > 0; i--) {
        res += s1.charCodeAt(i - 1);
      }
      return res;
    }
    if (memo[i][j] !== big) {
      return memo[i][j];
    }
    if (s1.charAt(i - 1) === s2.charAt(j - 1)) {
      memo[i][j] = dp(s1, i - 1, s2, j - 1);
    } else {
      memo[i][j] = Math.min(
        dp(s1, i - 1, s2, j) + s1.charCodeAt(i - 1),
        dp(s1, i, s2, j - 1) + s2.charCodeAt(j - 1),
        dp(s1, i - 1, s2, j - 1) + s1.charCodeAt(i - 1) + s2.charCodeAt(j - 1)
      );
    }

    return memo[i][j];
  };

  return dp(word1, l1, word2, l2);
};
// @lc code=end

const minimumDeleteSum_v1 = function (word1, word2) {
  const l1 = word1.length;
  const l2 = word2.length;
  const big = l1 + l2 + 1;
  const memo = new Array(l1 + 1)
    .fill(big)
    .map(() => new Array(l2 + 1).fill(big));

  const dp = function (s1, i, s2, j) {
    let res = 0;
    if (i === 0) {
      for (; j > 0; j--) {
        res += s2.charCodeAt(j - 1);
      }
      return res;
    }
    if (j === 0) {
      for (; i > 0; i--) {
        res += s1.charCodeAt(i - 1);
      }
      return res;
    }
    if (memo[i][j] !== big) {
      return memo[i][j];
    }
    if (s1.charAt(i - 1) === s2.charAt(j - 1)) {
      memo[i][j] = dp(s1, i - 1, s2, j - 1);
    } else {
      memo[i][j] = Math.min(
        dp(s1, i - 1, s2, j) + s1.charCodeAt(i - 1),
        dp(s1, i, s2, j - 1) + s2.charCodeAt(j - 1),
        dp(s1, i - 1, s2, j - 1) + s1.charCodeAt(i - 1) + s2.charCodeAt(j - 1)
      );
    }

    return memo[i][j];
  };

  return dp(word1, l1, word2, l2);
};
