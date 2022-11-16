/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function (nums) {
  let slow = 0;
  let fast = 0;

  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);
  slow = 0;
  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
};
// @lc code=end

// 这个题目巨神奇
// 利用快慢指针找出环
// 如果是没有重复的
// [1, 3, 4, 2, 5]
// 1 -> 3 -> 2 -> 4 -> 5 -> undefined 这是不会有环的
// [1, 3, 4, 2, 2]
// 1 -> 3 -> 2 -> 4 -> 2 -> 4 -.... 这是有环的
// 所以可以利用快慢指针
const findDuplicate_v1 = function (nums) {
  let slow = 0;
  let fast = 0;

  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);
  slow = 0;
  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
};
