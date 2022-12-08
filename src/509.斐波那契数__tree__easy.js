/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 典型的 db 哇
const fib = function (n) {
  if (n < 2) return n;
  let n_2 = 0;
  let n_1 = 1;
  for (let i = 2; i <= n; i++) {
    const temp = n_1;
    n_1 += n_2;
    n_2 = temp;
  }
  return n_1;
};
// @lc code=end
