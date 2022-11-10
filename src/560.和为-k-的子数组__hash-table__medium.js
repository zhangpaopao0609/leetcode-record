/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = function (nums, k) {
  const l = nums.length;
  let count = 0;
  const mp = new Map(); // 记录前缀和
  mp.set(0, 1);
  let pre = 0;

  for (let i = 0; i < l; i++) {
    // 记录前缀和
    pre += nums[i];
    if (mp.has(pre - k)) {
      count += mp.get(pre - k);
    }
    mp.set(pre, mp.has(pre) ? mp.get(pre) + 1 : 1);
  }

  return count;
};
// @lc code=end

// 直接枚举 O(n2)
const subarraySum_v1 = function (nums, k) {
  const l = nums.length;
  let count = 0;

  for (let i = 0; i < l; i++) {
    let sum = 0;
    for (let j = i; j >= 0; j--) {
      sum += nums[j];
      if (sum === k) count++;
    }
  }

  return count;
};

// 前缀和 + hash table 这个有点太巧了
// 当前的和 - 前缀和 如果有等于 k 的，那说明这个区间的子数组就是一个符合的
// 也即是说 当前的和 - k = 前缀和  就去找前缀和，有就累加
const subarraySum_v2 = function (nums, k) {
  const l = nums.length;
  let count = 0;
  const mp = new Map(); // 记录前缀和
  mp.set(0, 1);
  let pre = 0;

  for (let i = 0; i < l; i++) {
    // 记录前缀和
    pre += nums[i];
    if (mp.has(pre - k)) {
      count += mp.get(pre - k);
    }
    mp.set(pre, mp.has(pre) ? mp.get(pre) + 1 : 1);
  }

  return count;
};
