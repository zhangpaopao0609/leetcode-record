/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
  const len = nums.length;
  let best = Infinity;
  const sorted = nums.sort((a, b) => a - b);

  const update = function (sum) {
    if (Math.abs(sum - target) < Math.abs(best - target)) {
      best = sum;
    }
  };

  for (let first = 0; first < len - 1; first++) {
    if (first > 0 && sorted[first] === sorted[first - 1]) continue;

    let second = first + 1;
    let third = len - 1;
    while (second < third) {
      if (second > first + 1 && sorted[second] === sorted[second - 1]) {
        second++;
        continue;
      }
      if (third < len - 1 && sorted[third] === sorted[third + 1]) {
        third--;
        continue;
      }
      const sum = sorted[first] + sorted[second] + sorted[third];
      if (sum === target) {
        return sum;
      }
      update(sum);

      if (sum > target) {
        third--;
      } else {
        second++;
      }
    }
  }

  return best;
};
// @lc code=end
