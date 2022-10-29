/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
const maxDepth = function (root) {
  if (!root) return 0;
  const s = [];
  s.push(root);
  let depth = 0;

  while (s.length) {
    let t = s.length;
    while (t) {
      const n = s.shift();
      n.left && s.push(n.left);
      n.right && s.push(n.right);
      t--;
    }
    depth++;
  }

  return depth;
};
// @lc code=end

// 递归很简单，就是子树加 1，这个也就是 dfs
const maxDepth_1 = function (root) {
  if (!root) return 0;
  return Math.max(maxDepth_1(root.left), maxDepth_1(root.right)) + 1;
};

// bfs 先进先出
const maxDepth_2 = function (root) {
  if (!root) return 0;
  const s = [];
  s.push(root);
  let depth = 0;

  while (s.length) {
    let t = s.length;
    while (t) {
      const n = s.shift();
      n.left && s.push(n.left);
      n.right && s.push(n.right);
      t--;
    }
    depth++;
  }

  return depth;
};
