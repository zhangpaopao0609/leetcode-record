/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function (board, word) {
  const m = board.length;
  const n = board[0].length;
  const dfs = function (board, i, j, word, pos) {
    if (pos === word.length) return true;
    // 不在 board 中的直接返回 false
    if (i < 0 || i >= m || j < 0 || j >= n) return false;
    if (board[i][j] !== word[pos]) return false;
    const temp = board[i][j];
    board[i][j] = "";
    const top = dfs(board, i - 1, j, word, pos + 1);
    const bottom = dfs(board, i + 1, j, word, pos + 1);
    const left = dfs(board, i, j - 1, word, pos + 1);
    const right = dfs(board, i, j + 1, word, pos + 1);
    board[i][j] = temp;

    return top || bottom || left || right;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(board, i, j, word, 0)) {
        return true;
      }
    }
  }

  return false;
};
// @lc code=end

// dfs
const exist_v1 = function (board, word) {
  const m = board.length;
  const n = board[0].length;
  const dfs = function (board, i, j, word, pos) {
    if (pos === word.length) return true;
    // 不在 board 中的直接返回 false
    if (i < 0 || i >= m || j < 0 || j >= n) return false;
    if (board[i][j] !== word[pos]) return false;
    const temp = board[i][j];
    board[i][j] = "";
    const top = dfs(board, i - 1, j, word, pos + 1);
    const bottom = dfs(board, i + 1, j, word, pos + 1);
    const left = dfs(board, i, j - 1, word, pos + 1);
    const right = dfs(board, i, j + 1, word, pos + 1);
    board[i][j] = temp;

    return top || bottom || left || right;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(board, i, j, word, 0)) {
        return true;
      }
    }
  }

  return false;
};
