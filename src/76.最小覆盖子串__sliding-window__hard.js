/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
  const sl = s.length;
  const big = sl + 1;
  let l = 0; // 左指针
  let r = 0; // 右指针
  let needs = new Map(); // 所需要的
  let windows = new Map(); // 窗口拥有的
  let start = 0; // 最小的窗口开始位置
  let min = big; // 最小的窗口长度
  let valid = 0;

  for (const item of t) {
    needs.set(item, needs.has(item) ? needs.get(item) + 1 : 1);
  }

  while (r < sl) {
    // 要进入窗口的
    const n = s[r];
    r++;

    // 进入窗口
    windows.set(n, windows.has(n) ? windows.get(n) + 1 : 1);
    if (windows.get(n) === needs.get(n)) {
      // 这里为什么是等于，而不是大于等于呢？因为判断是否有效仅计算一次
      valid++;
    }

    // 如果满足，更新最小和减小窗口
    while (valid === needs.size) {
      // 更新最小
      if (r - l < min) {
        min = r - l;
        start = l;
      }
      const ls = s[l];
      // 减小窗口
      windows.set(ls, windows.get(ls) - 1);
      if (windows.get(ls) < needs.get(ls)) {
        // 如果小于所需值，那么无效了
        valid--;
      }
      l++;
    }
  }

  return min === big ? "" : s.slice(start, start + min);
};
// @lc code=end

// 滑动窗口

const minWindow_v1 = function (s, t) {
  const sl = s.length;
  const big = sl + 1;
  let l = 0; // 左指针
  let r = 0; // 右指针
  let needs = new Map(); // 所需要的
  let windows = new Map(); // 窗口拥有的
  let start = 0; // 最小的窗口开始位置
  let min = big; // 最小的窗口长度
  let valid = 0;

  for (const item of t) {
    needs.set(item, needs.has(item) ? needs.get(item) + 1 : 1);
  }

  while (r < sl) {
    // 要进入窗口的
    const n = s[r];
    r++;

    // 进入窗口
    windows.set(n, windows.has(n) ? windows.get(n) + 1 : 1);
    if (windows.get(n) === needs.get(n)) {
      // 这里为什么是等于，而不是大于等于呢？因为判断是否有效仅计算一次
      valid++;
    }

    // 如果满足，更新最小和减小窗口
    while (valid === needs.size) {
      // 更新最小
      if (r - l < min) {
        min = r - l;
        start = l;
      }
      const ls = s[l];
      // 减小窗口
      windows.set(ls, windows.get(ls) - 1);
      if (windows.get(ls) < needs.get(ls)) {
        // 如果小于所需值，那么无效了
        valid--;
      }
      l++;
    }
  }

  return min === big ? "" : s.slice(start, start + min);
};
