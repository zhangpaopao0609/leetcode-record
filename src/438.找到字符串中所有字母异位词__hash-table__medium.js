/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const sl = s.length;
  const pl = p.length;
  if (sl < pl) return [];

  let l = 0;
  let r = 0;
  let needs = new Map();
  let windows = new Map();
  let valid = 0;
  const res = [];

  for (const i of p) {
    needs.set(i, needs.has(i) ? needs.get(i) + 1 : 1);
  }

  while (r < sl) {
    // 进入窗口的值
    const n = s[r];
    r++;

    if (needs.has(n)) {
      windows.set(n, windows.has(n) ? windows.get(n) + 1 : 1);
      while (windows.get(n) > needs.get(n)) {
        windows.set(s[l], windows.get(s[l]) - 1);
        if (windows.get(s[l]) + 1 === needs.get(s[l])) {
          valid--;
        }
        l++;
      }
      if (windows.get(n) === needs.get(n)) {
        valid++;
      }
    } else {
      l = r;
      windows.clear();
      valid = 0;
    }

    if (valid === needs.size) {
      res.push(l);
      windows.set(s[l], windows.get(s[l]) - 1);
      valid--;
      l++;
    }
  }

  return res;
};
// @lc code=end

// 还是滑动窗口吧
const findAnagrams_v1 = function (s, p) {
  const sl = s.length;
  const pl = p.length;
  if (sl < pl) return [];

  let l = 0;
  let r = 0;
  let needs = new Map();
  let windows = new Map();
  let valid = 0;
  const res = [];

  for (const i of p) {
    needs.set(i, needs.has(i) ? needs.get(i) + 1 : 1);
  }

  while (r < sl) {
    // 进入窗口的值
    const n = s[r];
    r++;

    if (needs.has(n)) {
      windows.set(n, windows.has(n) ? windows.get(n) + 1 : 1);
      while (windows.get(n) > needs.get(n)) {
        windows.set(s[l], windows.get(s[l]) - 1);
        if (windows.get(s[l]) + 1 === needs.get(s[l])) {
          valid--;
        }
        l++;
      }
      if (windows.get(n) === needs.get(n)) {
        valid++;
      }
    } else {
      l = r;
      windows.clear();
      valid = 0;
    }

    if (valid === needs.size) {
      res.push(l);
      windows.set(s[l], windows.get(s[l]) - 1);
      valid--;
      l++;
    }
  }

  return res;
};
