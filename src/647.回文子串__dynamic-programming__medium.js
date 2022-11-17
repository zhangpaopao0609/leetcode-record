/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = function (s) {
  const l = s.length;
  let count = 0;

  // 枚举回文中心为 1 个的时候
  for (let i = 0; i < l; i++) {
    count++;
    let prev = i - 1;
    let after = i + 1;
    while (prev >= 0 && after < l && s[prev] === s[after]) {
      count++;
      prev--;
      after++;
    }
  }

  // 枚举回文中心为 2 个的时候
  for (let i = 0; i < l - 1; i++) {
    if (s[i] === s[i + 1]) {
      count++;
      let prev = i - 1;
      let after = i + 2;
      while (prev >= 0 && after < l && s[prev] === s[after]) {
        count++;
        prev--;
        after++;
      }
    }
  }

  return count;
};
// @lc code=end

// 思路就是枚举
// 有两种枚举的方法
// 1. 枚举出所有的子串，然后判断子串是否为回文
// 2. 枚举每一个可能的回文中心，然后用两个指针分别向左右两边拓展，当两个指针指向的元素相同的时候就拓展，否则停止拓展。（这个需要注意的是，回文中心可能是 1 个，也有可能是 2 个）
//
const countSubstrings_v1 = function (s) {
  const l = s.length;
  let count = 0;

  // 枚举回文中心为 1 个的时候
  for (let i = 0; i < l; i++) {
    count++;
    let prev = i - 1;
    let after = i + 1;
    while (prev >= 0 && after < l && s[prev] === s[after]) {
      count++;
      prev--;
      after++;
    }
  }

  // 枚举回文中心为 2 个的时候
  for (let i = 0; i < l - 1; i++) {
    if (s[i] === s[i + 1]) {
      count++;
      let prev = i - 1;
      let after = i + 2;
      while (prev >= 0 && after < l && s[prev] === s[after]) {
        count++;
        prev--;
        after++;
      }
    }
  }

  return count;
};
