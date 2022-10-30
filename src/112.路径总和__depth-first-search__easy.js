/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = function (root, targetSum) {
  if (!root) return false;
  const node = [root];
  const nodeSum = [root.val];

  while (node.length) {
    const now_node = node.shift();
    const now_nodeSum = nodeSum.shift();
    const left = now_node.left;
    const right = now_node.right;

    // 叶子节点且路径和等于目标值
    if (!left && !right && now_nodeSum === targetSum) return true;

    if (left) {
      node.push(left);
      nodeSum.push(now_nodeSum + left.val);
    }

    if (right) {
      node.push(right);
      nodeSum.push(now_nodeSum + right.val);
    }
  }

  return false;
};
// @lc code=end

// dfs
const hasPathSum_v1 = function (root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right) return !(targetSum - root.val);
  return (
    hasPathSum_v1(root.left, targetSum - root.val) ||
    hasPathSum_v1(root.right, targetSum - root.val)
  );
};

// bfs
// 用两个队列
// 一个队列用于存节点，一个用于存当前节点的路径和
const hasPathSum_v2 = function (root, targetSum) {
  if (!root) return false;
  const node = [root];
  const nodeSum = [root.val];

  while (node.length) {
    const now_node = node.shift();
    const now_nodeSum = nodeSum.shift();
    const left = now_node.left;
    const right = now_node.right;

    // 叶子节点且路径和等于目标值
    if (!left && !right && now_nodeSum === targetSum) return true;

    if (left) {
      node.push(left);
      nodeSum.push(now_nodeSum + left.val);
    }

    if (right) {
      node.push(right);
      nodeSum.push(now_nodeSum + right.val);
    }
  }

  return false;
};
