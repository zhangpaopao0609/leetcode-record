/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
  const generate = function (cur, open, close, max, result) {
    if (cur.length === max * 2) {
      result.push(cur);
    } else {
      if (open < max) {
        generate(cur + "(", open + 1, close, max, result);
      }
      if (close < open) {
        generate(cur + ")", open, close + 1, max, result);
      }
    }
  };

  const result = [];
  generate("", 0, 0, n, result);
  return result;
};

// @lc code=end

// 暴力解法

const generateParenthesis_v1 = function (n) {
  const generate = function (n) {
    if (n === 0) return [""];
    const n_1 = generate(n - 1);
    const res = [];
    n_1.forEach((s) => {
      res.push(s + "(");
      res.push(s + ")");
    });
    return res;
  };

  const isValid = function (s) {
    let balance = 0;
    for (const n of s) {
      if (n === "(") {
        balance++;
      } else {
        balance--;
      }

      if (balance < 0) {
        return false;
      }
    }

    return balance === 0;
  };

  const p = generate(2 * n);
  return p.filter((s) => isValid(s));
};

const generateParenthesis_v2 = function (n) {
  const isValid = function (s) {
    let balance = 0;
    for (const n of s) {
      if (n === "(") {
        balance++;
      } else {
        balance--;
      }

      if (balance < 0) {
        return false;
      }
    }

    return balance === 0;
  };

  const generate = function (current, len, result) {
    if (current.length === len) {
      const n = current.join("");
      if (isValid(n)) result.push(n);
    } else {
      generate([...current, "("], len, result);
      generate([...current, ")"], len, result);
    }
  };

  const result = [];
  generate([], 2 * n, result);
  return result;
};

// 回溯
// 不用等到最后了才去检查
// 当左括号小于 n 时，才可以添加左括号
// 当右括号小于左括号时，才可以添加右括号
const generateParenthesis_v3 = function (n) {
  const generate = function (cur, open, close, max, result) {
    if (cur.length === max * 2) {
      result.push(cur);
    } else {
      if (open < max) {
        generate(cur + "(", open + 1, close, max, result);
      }
      if (close < open) {
        generate(cur + ")", open, close + 1, max, result);
      }
    }
  };

  const result = [];
  generate("", 0, 0, n, result);
  return result;
};
