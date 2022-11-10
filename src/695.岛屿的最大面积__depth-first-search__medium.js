/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  let maxArea = 0;

  const dfs = function (grid, i, j, m, n) {
    // 不在网格中
    if (i >= m || j >= n || i < 0 || j < 0) return 0;
    // 不是 1
    if (grid[i][j] !== 1) return 0;
    grid[i][j] = 2;
    return (
      dfs(grid, i, j - 1, m, n) +
      dfs(grid, i, j + 1, m, n) +
      dfs(grid, i - 1, j, m, n) +
      dfs(grid, i + 1, j, m, n) +
      1
    );
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        maxArea = Math.max(dfs(grid, i, j, m, n), maxArea);
      }
    }
  }

  return maxArea;
};
// @lc code=end

const maxAreaOfIsland_v1 = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  let maxArea = 0;

  const dfs = function (grid, i, j, m, n) {
    // 不在网格中
    if (i >= m || j >= n || i < 0 || j < 0) return 0;
    // 不是 1
    if (grid[i][j] !== 1) return 0;
    grid[i][j] = 2;
    return (
      dfs(grid, i, j - 1, m, n) +
      dfs(grid, i, j + 1, m, n) +
      dfs(grid, i - 1, j, m, n) +
      dfs(grid, i + 1, j, m, n) +
      1
    );
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        maxArea = Math.max(dfs(grid, i, j, m, n), maxArea);
      }
    }
  }

  return maxArea;
};
