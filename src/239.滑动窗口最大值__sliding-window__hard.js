/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function (nums, k) {
  let l = 0;
  let r = k - 1;

  let max = -Infinity;
  let index = 0;
  const res = [];

  while (r < nums.length) {
    if (index <= l) {
      max = nums[l];
      for (let i = l + 1; i < r + 1; i++) {
        if (nums[i] > max) {
          max = nums[i];
          index = i;
        }
      }
    } else {
      if (nums[r] > max) {
        max = nums[r];
        index = r;
      }
    }
    res.push(max);
    l++;
    r++;
  }

  return res;
};
// @lc code=end

const maxSlidingWindow_v1 = function (nums, k) {
  let l = 0;
  let r = k - 1;

  let max = -Infinity;
  let index = 0;
  const res = [];

  while (r < nums.length) {
    if (index <= l) {
      max = nums[l];
      for (let i = l + 1; i < r + 1; i++) {
        if (nums[i] > max) {
          max = nums[i];
          index = i;
        }
      }
    } else {
      if (nums[r] > max) {
        max = nums[r];
        index = r;
      }
    }
    res.push(max);
    l++;
    r++;
  }

  return res;
};
