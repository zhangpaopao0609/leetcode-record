/*
 * @lc app=leetcode.cn id=827 lang=javascript
 *
 * [827] 最大人工岛
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
const largestIsland = function (grid) {
  const n = grid.length;
  const allLandArea = new Array(n + 1).fill(0);
  let index = 2;
  let all = true;

  const dfs = function (grid, i, j, n, index) {
    // 不在网格中
    if (i < 0 || j < 0 || i >= n || j >= n) return 0;
    // 不是陆地
    if (grid[i][j] !== 1) return 0;
    // 设置索引
    grid[i][j] = index;
    return (
      dfs(grid, i - 1, j, n, index) +
      dfs(grid, i + 1, j, n, index) +
      dfs(grid, i, j - 1, n, index) +
      dfs(grid, i, j + 1, n, index) +
      1
    );
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        allLandArea[index] = dfs(grid, i, j, n, index);
        index++;
      }
    }
  }

  let max = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        all = false;
        let left = j === 0 ? 0 : grid[i][j - 1];
        let right = j === n - 1 ? 0 : grid[i][j + 1];
        let top = i === 0 ? 0 : grid[i - 1][j];
        let bottom = i === n - 1 ? 0 : grid[i + 1][j];
        const r = new Set([left, right, top, bottom]);
        let sum = 0;
        for (const v of r) {
          sum += allLandArea[v];
        }
        max = Math.max(sum + 1, max);
      }
    }
  }
  return all ? n * n : max;
};
// @lc code=end

const largestIsland_v1 = function (grid) {
  const n = grid.length;
  let maxArea = 0;
  let all = true;

  const dfs = function (grid, i, j, n, mark) {
    if (i < 0 || j < 0 || i >= n || j >= n) return 0;
    if (grid[i][j] !== 1) return 0;
    if (mark[i][j]) return 0;
    mark[i][j] = true;
    const sum =
      dfs(grid, i - 1, j, n, mark) +
      dfs(grid, i + 1, j, n, mark) +
      dfs(grid, i, j - 1, n, mark) +
      dfs(grid, i, j + 1, n, mark) +
      1;
    return sum;
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        all = false;
        const mark = new Array(n)
          .fill(false)
          .map(() => new Array(n).fill(false));
        grid[i][j] = 1;
        maxArea = Math.max(maxArea, dfs(grid, i, j, n, mark));
        grid[i][j] = 0;
      }
    }
  }

  return all ? n * n : maxArea;
};

// 1. 计算出所有岛屿的面积并将其设置为下标，面积为值
// 2. 遍历所有的海洋，查看海洋格子的四周，不是来自同一个岛屿的面积加起来
const largestIsland_v2 = function (grid) {
  const n = grid.length;
  const allLandArea = new Array(n + 1).fill(0);
  let index = 2;
  let all = true;

  const dfs = function (grid, i, j, n, index) {
    // 不在网格中
    if (i < 0 || j < 0 || i >= n || j >= n) return 0;
    // 不是陆地
    if (grid[i][j] !== 1) return 0;
    // 设置索引
    grid[i][j] = index;
    return (
      dfs(grid, i - 1, j, n, index) +
      dfs(grid, i + 1, j, n, index) +
      dfs(grid, i, j - 1, n, index) +
      dfs(grid, i, j + 1, n, index) +
      1
    );
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        allLandArea[index] = dfs(grid, i, j, n, index);
        index++;
      }
    }
  }

  let max = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        all = false;
        let left = j === 0 ? 0 : grid[i][j - 1];
        let right = j === n - 1 ? 0 : grid[i][j + 1];
        let top = i === 0 ? 0 : grid[i - 1][j];
        let bottom = i === n - 1 ? 0 : grid[i + 1][j];
        const r = new Set([left, right, top, bottom]);
        let sum = 0;
        for (const v of r) {
          sum += allLandArea[v];
        }
        max = Math.max(sum + 1, max);
      }
    }
  }
  return all ? n * n : max;
};
