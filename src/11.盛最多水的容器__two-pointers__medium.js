/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  let l = height.length;
  let max = 0;
  let left = 0;
  let right = l - 1;

  while (left < right) {
    const l_n = height[left];
    const r_n = height[right];
    let n = 0;
    let distance = right - left;
    if (l_n < r_n) {
      n = l_n * distance;
      left++;
    } else {
      n = r_n * distance;
      right--;
    }
    max = n > max ? n : max;
  }

  return max;
};
// @lc code=end

// 双指针
// left right
// 如果此时 right 比 left 大，那么 heigh[left]*(right - left) 就是 left 最大，left++
// 如果 right 比 left 小， 那么 heigh[right]*(right - left) 就是 right 最大，left--
const maxArea_v2 = function (height) {
  let l = height.length;
  let max = 0;
  let left = 0;
  let right = l - 1;

  while (left < right) {
    const l_n = height[left];
    const r_n = height[right];
    let n = 0;
    let distance = right - left;
    if (l_n < r_n) {
      n = l_n * distance;
      left++;
    } else {
      n = r_n * distance;
      right--;
    }
    max = n > max ? n : max;
  }

  return max;
};
