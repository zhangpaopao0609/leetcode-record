/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  let count = 0;

  const dfs = function (grid, i, j, m, n) {
    // 不在网格中
    if (i >= m || j >= n || i < 0 || j < 0) return;
    // 不是 1
    if (grid[i][j] !== "1") return;
    grid[i][j] = "2";
    dfs(grid, i, j - 1, m, n);
    dfs(grid, i, j + 1, m, n);
    dfs(grid, i - 1, j, m, n);
    dfs(grid, i + 1, j, m, n);
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        dfs(grid, i, j, m, n);
        count++;
      }
    }
  }

  return count;
};
// @lc code=end

// 对遍历过的位置做一个标记 dfs
const numIslands_v1 = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  const mark = new Array(m).fill(false).map(() => new Array(n).fill(false));
  let count = 0;

  const dfs = function (grid, i, j, m, n, mark) {
    if (i >= m || j >= n || i < 0 || j < 0) return;
    if (mark[i][j]) return;
    mark[i][j] = true;
    const now = grid[i][j];
    if (now === "1") {
      dfs(grid, i, j - 1, m, n, mark);
      dfs(grid, i, j + 1, m, n, mark);
      dfs(grid, i - 1, j, m, n, mark);
      dfs(grid, i + 1, j, m, n, mark);
    }
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1" && !mark[i][j]) {
        dfs(grid, i, j, m, n, mark);
        count++;
      }
    }
  }

  return count;
};

// dfs
// 访问相邻结点，上下左右
// base case，不在网格中
const numIslands_v2 = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  let count = 0;

  const dfs = function (grid, i, j, m, n) {
    // 不在网格中
    if (i >= m || j >= n || i < 0 || j < 0) return;
    // 不是 1
    if (grid[i][j] !== "1") return;
    grid[i][j] = "2";
    dfs(grid, i, j - 1, m, n);
    dfs(grid, i, j + 1, m, n);
    dfs(grid, i - 1, j, m, n);
    dfs(grid, i + 1, j, m, n);
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        dfs(grid, i, j, m, n);
        count++;
      }
    }
  }

  return count;
};
