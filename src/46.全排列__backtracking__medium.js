/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
  const len = nums.length;
  const used = new Array(len).fill(false);

  const backtrack = function (track, nums, result) {
    if (track.length === len) {
      result.push([...track]);
    }

    for (let i = 0; i < len; i++) {
      // 排除不合法的选择
      if (used[i]) continue;
      // 做选择
      track.push(nums[i]);
      used[i] = true;
      // 进入下一层决策树
      backtrack(track, nums, result);
      // 撤销选择
      track.pop();
      used[i] = false;
    }
  };

  const result = [];
  backtrack([], nums, result);
  return result;
};
// @lc code=end

const permute_v2 = function (nums) {
  const backtrack = function (curr, rest, len, result) {
    if (curr.length === len) {
      result.push(curr);
    }

    for (let i = 0; i < rest.length; i++) {
      const next = [...rest];
      next.splice(i, 1);
      backtrack([...curr, rest[i]], next, len, result);
    }
  };

  const result = [];
  backtrack([], nums, nums.length, result);
  return result;
};

//
const permute_v3 = function (nums) {
  const len = nums.length;
  const used = new Array(len).fill(false);

  const backtrack = function (track, nums, result) {
    if (track.length === len) {
      result.push([...track]);
    }

    for (let i = 0; i < len; i++) {
      // 排除不合法的选择
      if (used[i]) continue;
      // 做选择
      track.push(nums[i]);
      used[i] = true;
      // 进入下一层决策树
      backtrack(track, nums, result);
      // 撤销选择
      track.pop();
      used[i] = false;
    }
  };

  const result = [];
  backtrack([], nums, result);
  return result;
};
