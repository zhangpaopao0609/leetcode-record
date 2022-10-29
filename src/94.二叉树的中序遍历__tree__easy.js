/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
const inorderTraversal = function (root) {
  const s = []; // 压入栈，dfs 就是先进后出，左 中 右
  const res = [];
  let t = root;

  while (t || s.length) {
    while (t) {
      s.push(t);
      t = t.left;
    }
    t = s.pop();
    res.push(t.val);

    t = t.right;
  }

  return res;
};
// @lc code=end

// 中序就是左，中，右 递归
const inorderTraversal_v1 = function (root) {
  const res = [];
  const s = function (tree) {
    if (tree === null) return;
    s(tree.left);
    res.push(tree.val);
    s(tree.right);
  };
  s(root);
  return res;
};

// dfs
const inorderTraversal_v2 = function (root) {
  const s = []; // 压入栈，dfs 就是先进后出，左 中 右
  const res = [];
  let t = root;

  while (t || s.length) {
    while (t) {
      s.push(t);
      t = t.left;
    }
    t = s.pop();
    res.push(t.val);

    t = t.right;
  }

  return res;
};
