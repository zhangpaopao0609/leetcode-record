/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  let posNum = 0;
  let posZero = 0;
  const l = nums.length - 1;

  while (posNum <= l) {
    const now = nums[posNum];
    if (now !== 0) {
      // 交换
      [nums[posNum], nums[posZero]] = [nums[posZero], nums[posNum]];
      posZero++;
    }
    posNum++;
  }
};
// @lc code=end

// two_pointers
// 两个指针，一个用于记录移动位置 p，一个用于记录最左侧 0 的位置 q
// 当 p 为非零时， p 和 q 交换，q++,p++
const moveZeroes_v1 = function (nums) {
  let posNum = 0;
  let posZero = 0;
  const l = nums.length - 1;

  while (posNum <= l) {
    const now = nums[posNum];
    if (now !== 0) {
      // 交换
      [nums[posNum], nums[posZero]] = [nums[posZero], nums[posNum]];
      posZero++;
    }
    posNum++;
  }
};
