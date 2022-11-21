/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
 * @return {number[][]}
 */
const zigzagLevelOrder = function (root) {
  if (!root) return [];

  const queue = [root];
  const res = [];
  let layer = 0;

  while (queue.length) {
    let size = queue.length;
    const node = [];

    while (size) {
      if (layer % 2 === 0) {
        // 左到右存当前层
        const n = queue.shift();
        node.push(n.val);
        // 左到右存下一层
        n.left && queue.push(n.left);
        n.right && queue.push(n.right);
      } else {
        // 右到左存当前层
        const n = queue.pop();
        node.push(n.val);
        // 左到右存下一层
        n.right && queue.unshift(n.right);
        n.left && queue.unshift(n.left);
      }
      size--;
    }
    layer++;
    res.push(node);
  }

  return res;
};
// @lc code=end

// 不一样的 bfs
const zigzagLevelOrder_v1 = function (root) {
  if (!root) return [];

  const queue = [root];
  const res = [];
  let layer = 0;

  while (queue.length) {
    let size = queue.length;
    const node = [];

    while (size) {
      if (layer % 2 === 0) {
        const n = queue.pop();
        node.push(n.val);
        n.right && queue.unshift(n.right);
        n.left && queue.unshift(n.left);
      } else {
        const n = queue.shift();
        node.push(n.val);
        n.left && queue.push(n.left);
        n.right && queue.push(n.right);
      }
      size--;
    }
    layer++;
    res.push(node);
  }

  return res;
};
