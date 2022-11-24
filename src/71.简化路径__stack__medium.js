/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
// 栈
const simplifyPath = function (path) {
  const s = [];
  for (let i = 1; i < path.length; ) {
    if (s.length === 0) s.push("/");
    // 在这里拿到两个/ 之间的
    let n = "";
    while (path[i] !== "/" && i < path.length) {
      n += path[i];
      i++;
    }

    if (n) {
      if (n === ".") {
        i++;
      } else if (n === "..") {
        s.pop();
        s.pop();
        i++;
      } else {
        s.push(n);
        s.push("/");
        i++;
      }
    } else {
      i++;
    }
  }

  if (s.length > 1 && s.at(-1) === "/") {
    s.pop();
  }
  if (s.length === 0) return "/";
  return s.join("");
};
// @lc code=end
