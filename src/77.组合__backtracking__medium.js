/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function (n, k) {
  const res = [];

  const backtrack = function (trace, index) {
    if (trace.length === k) {
      return res.push([...trace]);
    }

    for (let i = index; i <= n; i++) {
      // 做选择
      trace.push(i);
      // 下一层
      backtrack(trace, i + 1);
      // 撤销
      trace.pop();
    }
  };

  backtrack([], 1);

  return res;
};
// @lc code=end
