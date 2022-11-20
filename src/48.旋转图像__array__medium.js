/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
  const n = matrix.length;
  const m = n - 1;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < Math.floor((n + 1) / 2); j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[m - j][i];
      matrix[m - j][i] = matrix[m - i][m - j];
      matrix[m - i][m - j] = matrix[j][m - i];
      matrix[j][m - i] = temp;
    }
  }
};
// @lc code=end

// 旋转后 matrix[i][j]
// 现在的行 = 原来的列 m[i][...] = m[...][i]
// 现在的列 = n - 原来的行 m[...][j] = m[m-i][...]
// matrix[i][j] = matrix[n-j][i]
const rotate_v1 = function (matrix) {
  const n = matrix.length;
  for (let i = 0; i < Math.ceil(n / 2); i++) {
    for (let j = 0; j < Math.ceil(n / 2); j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[n - j][i];
      matrix[n - j][i] = matrix[n - i][n - j];
      matrix[n - i][n - j] = matrix[j][n - i];
      matrix[j][n - i] = temp;
    }
  }
};

// 看题解，还可以走翻转，这里我就不写了，其实旋转挺好想的
