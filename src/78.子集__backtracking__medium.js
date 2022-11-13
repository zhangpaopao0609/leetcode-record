/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function (nums) {
  const res = [];
  const track = [];

  const dfs = function (curr) {
    if (curr === nums.length) {
      return res.push([...track]);
    }

    track.push(nums[curr]);
    dfs(curr + 1);
    track.pop();
    dfs(curr + 1);
  };

  dfs(0);

  return res;
};
// @lc code=end

// 典型的回溯哇
const subsets_v1 = function (nums) {
  const res = [];

  const backtrack = function (nums, track, index) {
    res.push([...track]);

    if (index > nums.length) {
      return;
    }

    for (let i = index; i < nums.length; i++) {
      // 选择
      track.push(nums[i]);
      // 下一层
      backtrack(nums, track, i + 1);
      // 撤销
      track.pop();
    }
  };

  backtrack(nums, [], 0);
  return res;
};

const subsets_v2 = function (nums) {
  const res = [];
  const track = [];

  const dfs = function (curr) {
    if (curr === nums.length) {
      return res.push([...track]);
    }

    track.push(nums[curr]);
    dfs(curr + 1);
    track.pop();
    dfs(curr + 1);
  };

  dfs(0);

  return res;
};
