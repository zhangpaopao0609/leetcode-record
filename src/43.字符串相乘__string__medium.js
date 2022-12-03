/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// 竖式乘法
// 初始版
// num1 的每一个和 num2 相乘，最后再加起来
const multiply = function (s1, s2) {
  if (s1 === "0" || s2 === "0") return "0";
  const l1 = s1.length;
  const l2 = s2.length;

  const stringAdd = function (s1, s2) {
    const l1 = s1.length;
    const l2 = s2.length;
    let i = l1 - 1;
    let j = l2 - 1;
    let r = "";
    let next = 0;
    while (i >= 0 || j >= 0 || next) {
      const n1 = i >= 0 ? s1.charAt(i) - "0" : 0;
      const n2 = j >= 0 ? s2.charAt(j) - "0" : 0;
      const v = n1 + n2 + next;
      const nv = v % 10;
      next = Math.floor(v / 10);
      r = nv + r;
      i--;
      j--;
    }
    return r;
  };

  let ans = "";
  let unit = 0;
  for (let i = l1 - 1; i >= 0; i--) {
    const n_s1 = s1.charAt(i) - "0";
    let r = "" + "0".repeat(unit);
    let next = 0;
    let j = l2 - 1;
    while (j >= 0 || next) {
      const n = n_s1 * (s2.charAt(j) - "0");
      const v = n + next;
      const nv = v % 10;
      next = Math.floor(v / 10);
      r = nv + r;
      j--;
    }
    ans = stringAdd(ans, r);
    unit++;
  }
  return ans;
};
// @lc code=end
