/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = function (n) {
  const res = [];

  for (let i = 0; i <= n; i++) {
    let m = i;
    let count = 0;
    while (m) {
      m &= m - 1;
      count++;
    }
    res.push(count);
  }
4
  return res;
};
// @lc code=end

// n ^ (n-1) 就会干掉最右边的 1
const countBits_v1 = function (n) {
  const res = [];

  for (let i = 0; i <= n; i++) {
    let n = i;
    let count = 0;
    while (n) {
      n ^= n - 1;
      count++;
    }
    res.push(count);
  }

  return res;
};
