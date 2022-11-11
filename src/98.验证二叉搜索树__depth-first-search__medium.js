/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
const isValidBST = function (root) {
  const stack = [];
  let pre = -Infinity;

  while (stack.length || root !== null) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();
    if (root.val <= pre) {
      return false;
    }

    pre = root.val;
    root = root.right;
  }

  return true;
};
// @lc code=end

// 典型的 dfs
// 左子树需要是二叉搜索树，同时左子树最大的要小于 根
// 右子树需要是二叉搜索树，同时右子树最小的要大于 根
const isValidBST_v1 = function (root) {
  const dfs = function (tree, min, max) {
    if (!tree) return true;
    if (tree.val <= min || tree.val >= max) return false;
    return dfs(tree.left, min, tree.val) && dfs(tree.right, tree.val, max);
  };

  return dfs(root, -Infinity, Infinity);
};

// 二叉搜索树的中序遍历一定是升序的
const isValidBST_v2 = function (root) {
  const stack = [];
  let pre = -Infinity;

  while (stack.length || root !== null) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();
    if (root.val <= pre) {
      return false;
    }

    pre = root.val;
    root = root.right;
  }

  return true;
};
