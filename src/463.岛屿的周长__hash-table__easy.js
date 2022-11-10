/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = function (grid) {
  const row = grid.length;
  const col = grid[0].length;

  const dfs = function (grid, i, j, row, col) {
    // 不在网格中
    if (i < 0 || j < 0 || i >= row || j >= col) return 1;
    if (grid[i][j] === 0) return 1;
    if (grid[i][j] === 2) return 0;
    grid[i][j] = 2;

    return (
      dfs(grid, i - 1, j, row, col) +
      dfs(grid, i + 1, j, row, col) +
      dfs(grid, i, j - 1, row, col) +
      dfs(grid, i, j + 1, row, col)
    );
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        return dfs(grid, i, j, row, col);
      }
    }
  }
};
// @lc code=end

const islandPerimeter_v1 = function (grid) {
  const row = grid.length;
  const col = grid[0].length;

  const dfs = function (grid, i, j, row, col) {
    // 不在网格中
    if (i < 0 || j < 0 || i >= row || j >= col) return 1;
    if (grid[i][j] === 0) return 1;
    if (grid[i][j] === 2) return 0;
    grid[i][j] = 2;

    return (
      dfs(grid, i - 1, j, row, col) +
      dfs(grid, i + 1, j, row, col) +
      dfs(grid, i, j - 1, row, col) +
      dfs(grid, i, j + 1, row, col)
    );
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        return dfs(grid, i, j, row, col);
      }
    }
  }
};
