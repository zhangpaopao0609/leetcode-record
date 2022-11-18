/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function (target, nums) {
  const l = nums.length;
  let left = 0;
  let right = 0;
  let distance = Infinity;

  let count = nums[0];
  while (left < l && right < l) {
    if (count >= target) {
      distance = Math.min(distance, right - left + 1);
      count -= nums[left];
      left++;
    } else {
      right++;
      count += nums[right];
    }
  }

  return distance === Infinity ? 0 : distance;
};
// @lc code=end

// 类似于滑动窗口
// O(n)
const minSubArrayLen_v1 = function (target, nums) {
  const l = nums.length;
  let left = 0;
  let right = 0;
  let distance = Infinity;

  let count = nums[0];
  while (left < l && right < l) {
    if (count >= target) {
      distance = Math.min(distance, right - left + 1);
      count -= nums[left];
      left++;
    } else {
      right++;
      count += nums[right];
    }
  }

  return distance === Infinity ? 0 : distance;
};

// O(nlogn)
// 前缀和 + 二分
const minSubArrayLen_v2 = function (target, nums) {
  const l = nums.length;
  const sum = [nums[0]];
  for (let i = 1; i < l; i++) {
    sum[i] = sum[i - 1] + nums[i]; // 前缀和一定是升序的
  }
};
