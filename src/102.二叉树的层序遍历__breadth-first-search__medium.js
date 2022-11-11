/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
const levelOrder = function (root) {
  if (!root) return [];
  const q = [root];
  const res = [[root.val]];

  while (q.length) {
    let size = q.length;
    const nextLayerVal = [];

    while (size) {
      size--;
      const n = q.shift();
      const left = n.left;
      const right = n.right;

      if (left) {
        nextLayerVal.push(left.val);
        q.push(left);
      }

      if (right) {
        nextLayerVal.push(right.val);
        q.push(right);
      }
    }

    nextLayerVal.length && res.push(nextLayerVal);
  }

  return res;
};
// @lc code=end

// 典型的 bfs
const levelOrder_v1 = function (root) {
  if (!root) return [];
  const q = [[root]];
  const res = [[root.val]];

  while (q.length) {
    const layer = q.shift();
    const nextLayerVal = [];
    const nextLayerNode = [];

    while (layer.length) {
      const n = layer.shift();
      const left = n.left;
      const right = n.right;

      if (left) {
        nextLayerVal.push(left.val);
        nextLayerNode.push(left);
      }

      if (right) {
        nextLayerVal.push(right.val);
        nextLayerNode.push(right);
      }
    }

    nextLayerVal.length && res.push(nextLayerVal);
    nextLayerNode.length && q.push(nextLayerNode);
  }

  return res;
};

//  q 中不需要用数组来存，直接用长度记录即可
const levelOrder_v2 = function (root) {
  if (!root) return [];
  const q = [root];
  const res = [[root.val]];

  while (q.length) {
    let size = q.length;
    const nextLayerVal = [];

    while (size) {
      size--;
      const n = q.shift();
      const left = n.left;
      const right = n.right;

      if (left) {
        nextLayerVal.push(left.val);
        q.push(left);
      }

      if (right) {
        nextLayerVal.push(right.val);
        q.push(right);
      }
    }

    nextLayerVal.length && res.push(nextLayerVal);
  }

  return res;
};
