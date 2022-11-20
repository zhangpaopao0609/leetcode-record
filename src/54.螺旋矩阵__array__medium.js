/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  let top = 0;
  let bottom = m - 1;
  let left = 0;
  let right = n - 1;
  const res = [];

  while (true) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    if (++top > bottom) break;

    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    if (--right < left) break;

    for (let i = right; i >= left; i--) {
      res.push(matrix[bottom][i]);
    }
    if (top > --bottom) break;

    for (let i = bottom; i >= top; i--) {
      res.push(matrix[i][left]);
    }
    if (right < ++left) break;
  }

  return res;
};
// @lc code=end

const spiralOrder_v1 = function (matrix) {
  const res = [];

  const m = matrix.length;
  const n = matrix[0].length;
  const sum = m * n;

  let times = 0;

  while (true) {
    let x = times;
    let y = times;
    while (y < n - times && res.length < sum) {
      // 行
      res.push(matrix[x][y]);
      y++;
    }
    y--;
    x++;
    while (x < m - times && res.length < sum) {
      // 列
      res.push(matrix[x][y]);
      x++;
    }
    x--;
    y--;
    while (y >= times && res.length < sum) {
      // 行
      res.push(matrix[x][y]);
      y--;
    }
    y++;
    x--;
    while (x > times && res.length < sum) {
      // 列
      res.push(matrix[x][y]);
      x--;
    }
    times++;
    if (res.length === sum) {
      return res;
    }
  }
};

// 我写的这个有点太，太绕了，来个思路特别好的版本
const spiralOrder_v2 = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  let top = 0;  // 上边界
  let bottom = m - 1;  // 下边界
  let left = 0;  // 左边界
  let right = n - 1;  // 右边界
  const res = [];

  while (true) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    if (++top > bottom) break;

    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    if (--right < left) break;

    for (let i = right; i >= left; i--) {
      res.push(matrix[bottom][i]);
    }
    if (top > --bottom) break;

    for (let i = bottom; i >= top; i--) {
      res.push(matrix[i][left]);
    }
    if (right < ++left) break;
  }

  return res;
};
