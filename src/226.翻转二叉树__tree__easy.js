/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
const invertTree = function (root) {
  if (!root) return root;
  const node = [root];

  while (node.length) {
    const now_node = node.shift();
    const temp = now_node.left;
    now_node.left = now_node.right;
    now_node.right = temp;

    if (now_node.left) {
      node.push(now_node.left);
    }
    if (now_node.right) {
      node.push(now_node.right);
    }
  }

  return root;
};
// @lc code=end

// dfs
const invertTree_v1 = function (root) {
  if (!root) return root;

  const left = invertTree_v1(root.left);
  const right = invertTree_v1(root.right);
  root.left = right;
  root.right = left;
  return root;
};

// bfs
const invertTree_v2 = function (root) {
  if (!root) return root;
  const node = [root];

  while (node.length) {
    const now_node = node.shift();
    const temp = now_node.left;
    now_node.left = now_node.right;
    now_node.right = temp;

    if (now_node.left) {
      node.push(now_node.left);
    }
    if (now_node.right) {
      node.push(now_node.right);
    }
  }

  return root;
};
