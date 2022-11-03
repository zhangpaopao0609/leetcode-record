/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  const len = s.length;
  if (len < 2) return s;

  let maxLen = 1;
  let begin = 0;
  const dp = new Array(len).fill(0).map(() => new Array(len).fill(false));

  // 长度为 1 的子串为 true
  for (let i = 0; i < len; i++) {
    dp[i][i] = true;
  }

  for (let L = 2; L <= len; L++) {
    for (let i = 0; i < len - L + 1; i++) {
      const j = i + L - 1;
      if (s[i] !== s[j]) {
        dp[i][j] = false;
      } else {
        if (L <= 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }

      if (dp[i][j] && L > maxLen) {
        maxLen = L;
        begin = i;
      }
    }
  }

  return s.slice(begin, begin + maxLen);
};
// @lc code=end

const longestPalindrome_v1 = function (s) {
  // 有点没想到这个 dp
  // dp[i][j] 如果是回文子串的话，那么
  // dp[i-1][j+1] 仅当 dp[i][j] 是回文且 s[i-1] === s[j+1]
  // 如果 j-i === 0 true
  // 如果 j-i === 1 s[i] === s[j]
  const l = s.length;
  if (l === 0) return "";
  if (l === 1) return s;
  if (l === 2) return s[0] === s[1] ? s : s[0];

  let max = 0;
  let res = s[0];
  const dp = new Array(l).fill(0).map(() => new Array(false));

  // 长度为 1 的子串为 true
  for (let i = 0; i < l; i++) {
    dp[i][i] = true;
  }
  // 长度为 2 的子串
  for (let i = 0; i < l - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      max = 1;
      res = s.slice(i, i + 2);
    }
  }

  for (let L = 3; L <= l; L++) {
    for (let i = 0; i < l - L + 1; i++) {
      const j = i + L - 1;
      if (s[i] !== s[j]) {
        dp[i][j] = false;
      } else {
        dp[i][j] = dp[i + 1][j - 1];
        if (dp[i][j]) {
          if (j - i > max) {
            max = j - i;
            res = s.slice(i, j + 1);
          }
        }
      }
    }
  }

  return res;
};

const longestPalindrome_v2 = function (s) {
  // 有点没想到这个 dp
  // dp[i][j] 如果是回文子串的话，那么
  // dp[i-1][j+1] 仅当 dp[i][j] 是回文且 s[i-1] === s[j+1]
  // 如果 j-i === 0 true
  // 如果 j-i === 1 s[i] === s[j]
  const len = s.length;
  if (len < 2) return s;

  let maxLen = 1;
  let begin = 0;
  const dp = new Array(len).fill(0).map(() => new Array(len).fill(false));

  // 长度为 1 的子串为 true
  for (let i = 0; i < len; i++) {
    dp[i][i] = true;
  }

  for (let L = 2; L <= len; L++) {
    for (let i = 0; i < len - L + 1; i++) {
      const j = i + L - 1;
      if (s[i] !== s[j]) {
        dp[i][j] = false;
      } else {
        if (L <= 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }

      if (dp[i][j] && L > maxLen) {
        maxLen = L;
        begin = i;
      }
    }
  }

  return s.slice(begin, begin + maxLen);
};
