/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
  const sorted = intervals.sort((a, b) => a[0] - b[0]);
  const res = [];

  let prev = sorted[0];
  for (let i = 1; i < sorted.length; i++) {
    const n = sorted[i];
    if (n[0] <= prev[1]) {
      if (n[1] > prev[1]) {
        prev = [prev[0], n[1]];
      }
    } else {
      res.push(prev);
      prev = n;
    }
  }
  res.push(prev);
  return res;
};
// @lc code=end

const merge_v1 = function (intervals) {
  const sorted = intervals.sort((a, b) => a[0] - b[0]);
  const res = [];

  let prev = sorted[0];
  for (let i = 1; i < sorted.length; i++) {
    const n = sorted[i];
    if (n[0] <= prev[1]) {
      if (n[1] > prev[1]) {
        prev = [prev[0], n[1]];
      }
    } else {
      res.push(prev);
      prev = n;
    }
  }
  res.push(prev);
  return res;
};
