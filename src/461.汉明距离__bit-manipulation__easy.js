/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = function (x, y) {
  let s = x ^ y;
  let count = 0;
  while (s) {
    count++;
    s &= s - 1;
  }
  return count;
};
// @lc code=end

const hammingDistance_v1 = function (x, y) {
  let s = x ^ y;
  let count = 0;
  while (s) {
    count += s & 1;
    s >>= 1;
  }
  return count;
};

// 二进制实在有点神奇
const hammingDistance_v2 = function (x, y) {
  let s = x ^ y;
  let count = 0;
  while (s) {
    count++;
    s &= s - 1;
  }
  return count;
};
