/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumNumbers = function (root) {
  let sum = 0;

  const dfs = function (tree, ps) {
    if (!tree) return;
    if (!tree.left && !tree.right) {
      // 走到了叶子节点
      sum += ps * 10 + tree.val;
      return;
    }
    const ns = ps * 10 + tree.val;
    dfs(tree.left, ns);
    dfs(tree.right, ns);
  };
  dfs(root, 0);
  return sum;
};
// @lc code=end

// dfs
const sumNumbers_v1 = function (root) {
  let sum = 0;

  const dfs = function (tree, ps) {
    if (!tree) return;
    if (!tree.left && !tree.right) {
      // 走到了叶子节点
      sum += ps * 10 + tree.val;
      return;
    }
    const ns = ps * 10 + tree.val;
    dfs(tree.left, ns);
    dfs(tree.right, ns);
  };
  dfs(root, 0);
  return sum;
};
