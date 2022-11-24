/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 滑动
const findLength = function (nums1, nums2) {
  const findMaxLength = function (nums1, i, nums2, j, len) {
    let ret = 0;
    let count = 0;
    for (let k = 0; k < len; k++) {
      if (nums1[i + k] == nums2[j + k]) {
        count++;
      } else {
        count = 0;
      }
      ret = Math.max(ret, count);
    }
    return ret;
  };

  const l1 = nums1.length;
  const l2 = nums2.length;

  let ret = 0;
  // l1 不动，l2 向右边滑动
  for (let i = 0; i < l1; i++) {
    const len = Math.min(l2, l1 - i);
    const maxlen = findMaxLength(nums1, i, nums2, 0, len);
    ret = Math.max(ret, maxlen);
  }
  // l2 不动，l1 向右边滑动
  for (let i = 0; i < l2; i++) {
    const len = Math.min(l1, l2 - i);
    const maxlen = findMaxLength(nums1, 0, nums2, i, len);
    ret = Math.max(ret, maxlen);
  }
  return ret;
};
// @lc code=end

// dp[i][j] i 和 j 结尾的最长重复子数组
// dp[i][j]
// i 和 j 相等，dp[i - 1][j - 1] + 1
// i 和 j 不相等，0
// dp[0][...] = 0
// dp[...][0] = 0
const findLength_v1 = function (nums1, nums2) {
  const l1 = nums1.length;
  const l2 = nums2.length;
  const dp = new Array(l1 + 1).fill(-1).map(() => new Array(l2 + 1).fill(-1));
  let max = -1;

  for (let i = 0; i < l1 + 1; i++) {
    for (let j = 0; j < l2 + 1; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 0;
        continue;
      }
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = 0;
      }
      max = Math.max(max, dp[i][j]);
    }
  }
  return max;
};
