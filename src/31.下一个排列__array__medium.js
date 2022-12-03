/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = function (nums) {
  const len = nums.length;

  const swap = function (nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  };

  let i = len - 2;
  let j = len - 1;

  while (nums[i] >= nums[i + 1] && i >= 0) {
    i--;
  }

  if (i >= 0) {
    while (nums[i] >= nums[j] && j >= 0) {
      j--;
    }
    swap(nums, i, j);
  }

  let l = i + 1;
  let r = len - 1;
  while (l < r) {
    swap(nums, l, r);
    l++;
    r--;
  }
  return nums;
};
// @lc code=end

// 从后往前，i 后面的数如果有大于 i数的，就交换，然后后面的数再升序排列
const nextPermutation_v1 = function (nums) {
  const len = nums.length;

  const swap = function (nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  };

  for (let i = len - 2; i >= 0; i--) {
    let minMax = i;
    for (let j = i + 1; j < len; j++) {
      // 找到最小的那个大于它的
      if (nums[j] > nums[i]) {
        minMax = nums[j] < nums[minMax] || minMax === i ? j : minMax;
      }
    }

    if (minMax !== i) {
      swap(nums, i, minMax);
      for (let k = i + 1; k < len; k++) {
        let min = k;
        for (let p = k + 1; p < len; p++) {
          if (nums[min] > nums[p]) min = p;
        }
        swap(nums, k, min);
      }
      return nums;
    }
  }

  return nums.sort((a, b) => a - b);
};
