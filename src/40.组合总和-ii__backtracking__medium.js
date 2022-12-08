/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = function (candidates, target) {
  const len = candidates.length;
  const res = [];
  candidates.sort((a, b) => a - b);
  const backtrack = function (trace, sum, index) {
    if (sum === target) {
      return res.push([...trace]);
    }
    if (sum > target) {
      return;
    }

    for (let i = index; i < len; i++) {
      // 排除重复
      if (i > index && candidates[i] === candidates[i - 1]) continue;
      // 做选择
      const n = candidates[i];
      trace.push(n);
      // 下一层
      backtrack(trace, sum + n, i + 1);
      // 撤销选择
      trace.pop();
    }
  };

  backtrack([], 0, 0);
  return res;
};
// @lc code=end
