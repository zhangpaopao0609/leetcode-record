/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
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
  const memo = new Array(l1).fill(-1).map(() => new Array(l2).fill(-1));

  const dp_v1 = function (s1, i, s2, j) {
    if (i === -1) return j + 1;
    if (j === -1) return i + 1;
    if (memo[i][j] !== -1) {
      return memo[i][j];
    }

    if (s1[i] == s2[j]) {
      memo[i][j] = dp_v1(s1, i - 1, s2, j - 1);
    } else {
      memo[i][j] =
        Math.min(
          dp_v1(s1, i, s2, j - 1),
          dp_v1(s1, i - 1, s2, j),
          dp_v1(s1, i - 1, s2, j - 1)
        ) + 1;
    }
    return memo[i][j];
  };
  return dp_v1(word1, l1 - 1, word2, l2 - 1);
};
// @lc code=end

const minDistance_v1 = function (word1, word2) {
  const l1 = word1.length;
  const l2 = word2.length;
  const memo = new Array(l1).fill(-1).map(() => new Array(l2).fill(-1));

  const dp_v1 = function (s1, i, s2, j) {
    if (i === -1) return j + 1;
    if (j === -1) return i + 1;
    if (memo[i][j] !== -1) {
      return memo[i][j];
    }

    if (s1[i] == s2[j]) {
      memo[i][j] = dp_v1(s1, i - 1, s2, j - 1);
    } else {
      memo[i][j] =
        Math.min(
          dp_v1(s1, i, s2, j - 1),
          dp_v1(s1, i - 1, s2, j),
          dp_v1(s1, i - 1, s2, j - 1)
        ) + 1;
    }
    return memo[i][j];
  };
  return dp_v1(word1, l1 - 1, word2, l2 - 1);
};

console.log(minDistance_v1("horse", "ros"));
