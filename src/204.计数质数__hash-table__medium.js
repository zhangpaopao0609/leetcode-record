/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function (n) {
  const prime = new Array(n).fill(1);
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (prime[i]) {
      count++;
      // 是素数
      for (let j = i * i; j < n; j += i) {
        prime[j] = 0;
      }
    }
  }

  return count;
};
// @lc code=end
