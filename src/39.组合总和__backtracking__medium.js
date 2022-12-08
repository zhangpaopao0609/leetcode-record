/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// 典型的回溯

const combinationSum = function (candidates, target) {
  const len = candidates.length;
  const res = [];

  const backtrack = function (trace, sum, index) {
    if (sum === target) {
      return res.push([...trace]);
    }
    if (sum > target) {
      return;
    }

    for (let i = index; i < len; i++) {
      // 做选择
      const n = candidates[i];
      trace.push(n);
      // 下一层
      backtrack(trace, sum + n, i);
      // 撤销选择
      trace.pop();
    }
  };

  backtrack([], 0, 0);
  return res;
};
// @lc code=end
