/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (p1 < 0) {
      nums1[i] = nums2[p2--];
    } else if (p2 < 0) {
      nums1[i] = nums1[p1--];
    } else {
      nums1[i] = nums1[p1] > nums2[p2] ? nums1[p1--] : nums2[p2--];
    }
  }
};
// @lc code=end
// 最简单的做法就是空间换时间
const merge_v1 = function (nums1, m, nums2, n) {
  const arr = [];
  let p1 = 0;
  let p2 = 0;
  for (let i = 0; i < m + n; i++) {
    if (p1 === m) {
      arr.push(nums2[p2]);
      p2++;
    } else if (p2 === n) {
      arr.push(nums1[p1]);
      p1++;
    } else {
      arr.push(nums1[p1] > nums2[p2] ? nums2[p2++] : nums1[p1++]);
    }
  }

  for (let i = 0; i < m + n; i++) {
    nums1[i] = arr[i];
  }
};

// 所有玩家都全力向前冲刺, 却不知道向后才是胜利之门。-《头号玩家》
const merge_v2 = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (p1 < 0) {
      nums1[i] = nums2[p2--];
    } else if (p2 < 0) {
      nums1[i] = nums1[p1--];
    } else {
      nums1[i] = nums1[p1] > nums2[p2] ? nums1[p1--] : nums2[p2--];
    }
  }
};
