/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
const rightSideView = function (root) {
  if (!root) return [];
  const res = [];
  const queue = [root];

  while (queue.length) {
    let size = queue.length;

    while (size) {
      const n = queue.shift();
      size === 1 && res.push(n.val);
      n.left && queue.push(n.left);
      n.right && queue.push(n.right);
      size--;
    }
  }

  return res;
};
// @lc code=end

// 先写个 bfs
const rightSideView_v1 = function (root) {
  if (!root) return [];
  const res = [];
  const queue = [root];

  while (queue.length) {
    let size = queue.length;

    while (size) {
      const n = queue.shift();
      size === 1 && res.push(n.val);
      n.left && queue.push(n.left);
      n.right && queue.push(n.right);
      size--;
    }
  }

  return res;
};
