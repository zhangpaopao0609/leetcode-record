/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = function (n) {
  const board = new Array(n).fill(".").map(() => new Array(n).fill("."));
  const res = [];

  const isValid = function (row, column, board) {
    // 检查当前列是否有
    for (let i = 0; i < row; i++) {
      if (board[i][column] === "Q") return false;
    }

    // 检查左上方
    for (let i = row - 1, j = column - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }

    // 检查右上方
    for (let i = row - 1, j = column + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === "Q") return false;
    }

    return true;
  };

  const backtrack = function (row, board) {
    if (row === n) {
      return res.push(board.map((item) => item.join("")));
    }
    for (let column = 0; column < n; column++) {
      // 排除不合法的
      if (!isValid(row, column, board)) continue;

      // 选择列
      board[row][column] = "Q";
      // 下一层决策树
      backtrack(row + 1, board);
      // 撤销
      board[row][column] = ".";
    }
  };
  backtrack(0, board);
  return res;
};
// @lc code=end

const solveNQueens_v1 = function (n) {
  const board = new Array(n).fill(".").map(() => new Array(n).fill("."));
  const res = [];

  const isValid = function (row, column, board) {
    // 检查当前列是否有
    for (let i = 0; i < row; i++) {
      if (board[i][column] === "Q") return false;
    }

    // 检查左上方
    for (let i = row - 1, j = column - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }

    // 检查右上方
    for (let i = row - 1, j = column + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === "Q") return false;
    }

    return true;
  };

  const backtrack = function (row, board) {
    if (row === n) {
      return res.push(board.map((item) => item.join("")));
    }
    for (let column = 0; column < n; column++) {
      // 排除不合法的
      if (!isValid(row, column, board)) continue;

      // 选择列
      board[row][column] = "Q";
      // 下一层决策树
      backtrack(row + 1, board);
      // 撤销
      board[row][column] = ".";
    }
  };
  backtrack(0, board);
  return res;
};
