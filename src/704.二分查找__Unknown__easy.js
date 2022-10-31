/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  const helper = function (nums, left, right) {
    if (left > right) return -1;
    const mid = left + ((right - left) >> 1);
    const now = nums[mid];
    if (now > target) {
      return helper(nums, left, mid - 1);
    } else if (now < target) {
      return helper(nums, mid + 1, right);
    } else {
      return mid;
    }
  };

  return helper(nums, left, right);
};
// @lc code=end

// binary search
const search_v1 = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    const now = nums[mid];
    if (now > target) {
      right = mid - 1;
    } else if (now < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
};

// binary search
const search_v2 = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  const helper = function (nums, left, right) {
    if (left > right) return -1;
    const mid = left + ((right - left) >> 1);
    const now = nums[mid];
    if (now > target) {
      return helper(nums, left, mid - 1);
    } else if (now < target) {
      return helper(nums, mid + 1, right);
    } else {
      return mid;
    }
  };

  return helper(nums, left, right);
};
