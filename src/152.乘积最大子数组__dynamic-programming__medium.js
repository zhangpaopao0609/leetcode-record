/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function (nums) {
  const l = nums.length;
  dp_min = nums[0];
  dp_max = nums[0];
  let max = nums[0];

  for (let i = 1; i < l; i++) {
    const dp_max_temp = Math.max(dp_max * nums[i], dp_min * nums[i], nums[i]);
    const dp_min_temp = Math.min(dp_max * nums[i], dp_min * nums[i], nums[i]);
    dp_max = dp_max_temp;
    dp_min = dp_min_temp;
    max = Math.max(max, dp_max);
  }

  return max;
};
// @lc code=end
// 如果当前的为正，那么前一个尽可能大
// 如果当前的为负，那么前一个尽可能小
// 尽可能大，尽可能小
const maxProduct_v1 = function (nums) {
  const l = nums.length;
  const dp_min = new Array(l);
  const dp_max = new Array(l);
  dp_min[0] = nums[0];
  dp_max[0] = nums[0];
  let max = nums[0];

  for (let i = 1; i < l; i++) {
    dp_max[i] = Math.max(
      dp_max[i - 1] * nums[i],
      dp_min[i - 1] * nums[i],
      nums[i]
    );
    dp_min[i] = Math.min(
      dp_max[i - 1] * nums[i],
      dp_min[i - 1] * nums[i],
      nums[i]
    );
    max = Math.max(max, dp_max[i]);
  }

  return max;
};

const maxProduct_v2 = function (nums) {
  const l = nums.length;
  dp_min = nums[0];
  dp_max = nums[0];
  let max = nums[0];

  for (let i = 1; i < l; i++) {
    const dp_max_temp = Math.max(dp_max * nums[i], dp_min * nums[i], nums[i]);
    const dp_min_temp = Math.min(dp_max * nums[i], dp_min * nums[i], nums[i]);
    dp_max = dp_max_temp;
    dp_min = dp_min_temp;
    max = Math.max(max, dp_max);
  }

  return max;
};
