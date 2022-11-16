/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = function (s, wordDict) {
  const l = s.length;
  // dp[i] 长度为 i-1 时是否满足
  const dp = new Array(l + 1).fill(false);
  dp[0] = true;

  for (let i = 0; i <= l; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDict.includes(s.slice(j, i))) {
        dp[i] = true;
        continue
      }
    }
  }

  return dp[l];
};
// @lc code=end

// 回溯超时了
const wordBreak_v1 = function (s, wordDict) {
  const isSame = function (s, track, pos) {
    for (let i = pos; i < track.length; i++) {
      if (s[i] !== track[i]) return false;
    }

    return true;
  };

  const bracktrack = function (track, pos) {
    if (track.length > s.length) return false;
    if (track === s) return true;
    if (!isSame(s, track, pos)) return false;
    pos = track.length;
    for (let i = 0; i < wordDict.length; i++) {
      // 选择
      const n = wordDict[i];
      const l = n.length;
      track += n;

      const r = bracktrack(track, pos);
      if (r) return true;

      // 撤销
      track = track.slice(0, -l);
    }

    return false;
  };
  return bracktrack("", 0);
};

// 动态规划
// 状态 和 选择
// 状态是 现在的字符
// 选择是 wordDict
// dp[i]
// dp[i-wordDict.length]
// 这是自顶向下的
const wordBreak_v2 = function (s, wordDict) {
  const l = s.length;
  const memo = new Array(l + 1).fill(-1);

  const dp = function (s, end) {
    if (end === 0) return true;
    if (end < 0) return false;
    if (memo[end] !== -1) {
      return memo[end];
    }

    for (let i = 0; i < wordDict.length; i++) {
      const n = wordDict[i];
      const nl = n.length;

      const ns = s.slice(end - nl, end);
      if (n !== ns) continue;
      if (dp(s, end - nl)) {
        return true;
      }
    }
    memo[end] = false;
    return false;
  };

  return dp(s, l);
};

// 这是自底向上的
const wordBreak_v3 = function (s, wordDict) {
  const l = s.length;
  // dp[i] 长度为 i 时是否满足
  const dp = new Array(l + 1).fill(false);
  dp[0] = true;

  for (let i = 0; i <= l; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDict.includes(s.slice(j, i))) {
        dp[i] = true;
        continue
      }
    }
  }

  return dp[l];
};
