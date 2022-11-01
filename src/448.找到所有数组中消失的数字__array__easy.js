/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = function (nums) {
  const n = nums.length;
  const m = n + 1
  for (let i = 0; i < n; i++) {
    const now = (nums[i] % m) - 1;
    nums[now] += m;
  }

  const res = [];
  for (let i = 0; i < n; i++) {
    if (nums[i] < m) res.push(i + 1);
  }

  return res;
};
// @lc code=end

const findDisappearedNumbers_v1 = function (nums) {
  const n = nums.length;
  const has = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    has[nums[i] - 1] = 1;
  }
  const res = [];
  for (let i = 0; i < n; i++) {
    if (has[i] === 0) res.push(i + 1);
  }

  return res;
};

const findDisappearedNumbers_v2 = function (nums) {
  const n = nums.length;
  const m = n + 1
  for (let i = 0; i < n; i++) {
    const now = (nums[i] % m) - 1;
    nums[now] += m;
  }

  const res = [];
  for (let i = 0; i < n; i++) {
    if (nums[i] < m) res.push(i + 1);
  }

  return res;
};
