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

const minDistance = function (word1, word2) {};
// @lc code=end

const minDistance_v1 = function (word1, word2) {
  let p = word1.length;
  let q = word2.length;
  let num = 0;

  if (p !== -1 || q !== -1) {
    num++;
    if (p === -1) q--;
    if (q === -1) p--;
    const pn = word1.charAt(p - 1);
    const qn = word2.charAt(q - 1);
    if (pn === qn) {
      p--;
      q--;
    } else {
      if (p <= q) {
        q--;
      }
      p--;
    }
  }
  return num;
};
