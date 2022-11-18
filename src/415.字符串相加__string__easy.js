/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = function (num1, num2) {
  const l1 = num1.length;
  const l2 = num2.length;
  let p1 = l1 - 1;
  let p2 = l2 - 1;

  let next = 0;
  let r = "";

  while (p1 >= 0 || p2 >= 0 || next) {
    const n1 = p1 >= 0 ? num1.charCodeAt(p1--) - 48 : 0;
    const n2 = p2 >= 0 ? num2.charCodeAt(p2--) - 48 : 0;
    const v = n1 + n2 + next;
    const n = v % 10;
    next = (v - n) / 10;
    r = n + r;
  }

  return r;
};
// @lc code=end

const addStrings_v1 = function (num1, num2) {
  const l1 = num1.length;
  const l2 = num2.length;
  let p1 = l1 - 1;
  let p2 = l2 - 1;

  let next = 0;
  let r = "";

  while (p1 >= 0 || p2 >= 0 || next) {
    const n1 = p1 >= 0 ? num1.charCodeAt(p1--) - 48 : 0;
    const n2 = p2 >= 0 ? num2.charCodeAt(p2--) - 48 : 0;
    const v = n1 + n2 + next;
    const n = v % 10;
    next = (v - n) / 10;
    r = n + r;
  }

  return r;
};
