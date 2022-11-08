/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  let l = (r = max = 0),
    map = new Map();
  while (r < s.length) {
    const n = s[r];
    if (map.has(n)) {
      l = Math.max(l, map.get(n) + 1);
    }
    max = Math.max(max, r - l + 1);
    map.set(n, r);
    r++;
  }

  return max;
};
// @lc code=end

// 两个指针往前，一前一后，
// p，q
// set 维护 p 和 q 之间的字符
const lengthOfLongestSubstring_v1 = function (s) {
  const len = s.length;
  const ss = [];
  let max = 0;
  for (let p = 0; p < len; p++) {
    const n = s.charAt(p);
    while (ss.indexOf(n) !== -1) {
      ss.shift();
    }
    ss.push(n);
    max = ss.length > max ? ss.length : max;
  }

  return max;
};

const lengthOfLongestSubstring_v2 = function (s) {
  let l = (r = max = 0),
    map = new Map();
  while (r < s.length) {
    const n = s[r];
    if (map.has(n)) {
      l = Math.max(l, map.get(n) + 1);
    }
    max = Math.max(max, r - l + 1);
    map.set(n, r);
    r++;
  }

  return max;
};
