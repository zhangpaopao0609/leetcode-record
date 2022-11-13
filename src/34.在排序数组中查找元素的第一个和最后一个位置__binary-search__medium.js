/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    const mid = ((r - l) >> 1) + l;

    if (nums[mid] > target) {
      r = mid - 1;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      let ll = mid;
      let rr = mid;
      while (true) {
        if (nums[ll - 1] === target) {
          ll--;
        }
        if (nums[rr + 1] === target) {
          rr++;
        }
        if (nums[ll - 1] !== target && nums[rr + 1] !== target) {
          return [ll, rr];
        }
      }
    }
  }

  return [-1, -1];
};
// @lc code=end

// 二分细节
const searchRange_v1 = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    const mid = ((r - l) >> 1) + l;

    if (nums[mid] > target) {
      r = mid - 1;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      let ll = mid;
      let rr = mid;
      while (true) {
        if (nums[ll - 1] === target) {
          ll--;
        }
        if (nums[rr + 1] === target) {
          rr++;
        }
        if (nums[ll - 1] !== target && nums[rr + 1] !== target) {
          return [ll, rr];
        }
      }
    }
  }

  return [-1, -1];
};
