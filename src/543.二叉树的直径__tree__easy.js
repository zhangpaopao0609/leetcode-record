/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
const diameterOfBinaryTree = function (root) {
  let max = 0;
  const depth = function (tree) {
    if (!tree) return 0;
    const l = depth(tree.left);
    const r = depth(tree.right);
    max = Math.max(l + r + 1, max);
    return Math.max(l, r) + 1;
  };
  depth(root);
  return max - 1;
};
// @lc code=end

const diameterOfBinaryTree_v1 = function (root) {
  let max = 0;
  const depth = function (tree) {
    if (!tree) return 0;
    const l = depth(tree.left);
    const r = depth(tree.right);
    max = Math.max(l + r, max);
    return Math.max(l, r) + 1;
  };
  depth(root);
  return max;
};

// 1. 以 node 为根节点的最大直径是 l + r + 1 （深度）
// 2. 某个结点的深度 max(l, r) + 1
// 3. 用一个最大值来记录每个结点的最大直径

const diameterOfBinaryTree_v2 = function (root) {
  let max = 0;
  const depth = function (tree) {
    if (!tree) return 0;
    const l = depth(tree.left);
    const r = depth(tree.right);
    max = Math.max(l + r + 1, max);
    return Math.max(l, r) + 1;
  };
  depth(root);
  return max - 1;
};
