/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function (nums) {
  const len = nums.length;
  const res = [];
  nums.sort((a, b) => a - b);
  const used = new Array(len).fill(false);

  const backtrack = function (trace) {
    if (trace.length === len) {
      return res.push([...trace]);
    }

    for (let i = 0; i < len; i++) {
      // 去除无效
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
      if (used[i]) continue;

      // 做决策
      trace.push(nums[i]);
      used[i] = true;
      // 下一层
      backtrack(trace, i + 1);
      // 撤销
      trace.pop();
      used[i] = false;
    }
  };

  backtrack([]);

  return res;
};
// @lc code=end
