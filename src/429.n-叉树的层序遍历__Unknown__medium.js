/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
  if (!root) return [];
  const res = [];
  const queue = [root];

  while (queue.length) {
    const cnt = queue.length;
    const ns = [];

    for (let i = 0; i < cnt; i++) {
      const nn = queue.shift();
      ns.push(nn.val);

      for (const child of nn.children) {
        queue.push(child);
      }
    }

    res.push(ns);
  }

  return res;
};
// @lc code=end

// 写一遍 bfs 吧
const levelOrder_v1 = function (root) {
  if (!root) return [];
  const res = [];
  const queue = [root];

  while (queue.length) {
    const cnt = queue.length;
    const ns = [];

    for (let i = 0; i < cnt; i++) {
      const nn = queue.shift();
      ns.push(nn.val);

      for (const child of nn.children) {
        queue.push(child);
      }
    }

    res.push(ns);
  }

  return res;
};
