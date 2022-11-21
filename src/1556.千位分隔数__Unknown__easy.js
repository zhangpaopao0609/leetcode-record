/*
 * @lc app=leetcode.cn id=1556 lang=javascript
 *
 * [1556] 千位分隔数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
const thousandSeparator = function (n) {
  return String(n).replace(/(?!^)(?=(\d{3})+$)/g, ".");
};
// @lc code=end

// 正则
const thousandSeparator_v1 = function (n) {
  return String(n).replace(/(?!^)(?=(\d{3})+$)/g, ".");
};

// 数学 当然，可以直接除 1000 的
const thousandSeparator_v2 = function (n) {
  if (n === 0) return "0";
  let nc = n;
  let ans = "";
  let count = 0;

  while (nc) {
    if (count === 3) {
      ans = "." + ans;
      count = 0;
    } else {
      const v = nc % 10;
      ans = v + ans;
      nc = (nc - v) / 10;
      count++;
    }
  }

  return ans;
};
