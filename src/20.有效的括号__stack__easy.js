/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const stack = [];
  let sc = s;
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  while (sc) {
    const n = sc[0];
    sc = sc.slice(1);
    const sl = stack.length;
    if (sl === 0) {
      stack.push(n);
    } else {
      const st = stack[sl - 1];
      const map_st = map[st];
      if (n === map_st) {
        stack.pop();
      } else if (map_st === undefined) {
        return false;
      } else {
        stack.push(n);
      }
    }
  }

  return !stack.length;
};
// @lc code=end

// 题目还行，就是考察栈
// 不对应就压入栈，对应就取出，如果最后栈中元素为 0，那么 true，反之 false
const isValid_v1 = function (s) {
  const stack = [];
  let sc = s;
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  while (sc) {
    const n = sc[0];
    sc = sc.slice(1);
    const sl = stack.length;
    if (sl === 0) {
      stack.push(n);
    } else {
      const st = stack[sl - 1];
      const map_st = map[st];
      if (n === map_st) {
        stack.pop();
      } else if (map_st === undefined) {
        return false;
      } else {
        stack.push(n);
      }
    }
  }

  return !stack.length;
};
