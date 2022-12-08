/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = function (nums) {
  const len = nums.length;
  const res = [];
  nums.sort((a, b) => a - b);

  const backtrack = function (trace, index) {
    res.push([...trace]);

    for (let i = index; i < len; i++) {
      // 去除无效
      if (i > index && nums[i] === nums[i - 1]) continue;
      // 做决策
      trace.push(nums[i]);
      // 下一层
      backtrack(trace, i + 1);
      // 撤销
      trace.pop();
    }
  };

  backtrack([], 0);

  return res;
};
// @lc code=end
