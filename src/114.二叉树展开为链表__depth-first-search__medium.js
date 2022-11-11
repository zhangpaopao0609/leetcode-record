/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = function (root) {
  if (!root) return;

  const left = root.left;
  const right = root.right;
  const dfs = function (tree) {
    if (!tree) return;
    const left = tree.left;
    const right = tree.right;
    root.left = null;
    root.right = tree;
    root = root.right;
    dfs(left);
    dfs(right);
  };

  dfs(left);
  dfs(right);
};
// @lc code=end

// 先先序存储，然后重新链接
const flatten_v1 = function (root) {
  const node = [];

  const dfs = function (tree) {
    if (!tree) return;
    node.push(tree);
    dfs(tree.left);
    dfs(tree.right);
  };

  dfs(root);

  for (let i = 1; i < node.length; i++) {
    const prev = node[i - 1];
    const curr = node[i];
    prev.left = null;
    prev.right = curr;
  }
};

const flatten_v2 = function (root) {
  if (!root) return;

  const left = root.left;
  const right = root.right;
  const dfs = function (tree) {
    if (!tree) return;
    const left = tree.left;
    const right = tree.right;
    root.left = null;
    root.right = tree;
    root = root.right;
    dfs(left);
    dfs(right);
  };

  dfs(left);
  dfs(right);
};
