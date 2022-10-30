/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
const pathSum = function (root, targetSum) {
  if (!root) return [];
  const node = [root];
  const nodeSum = [root.val];
  const nodeMap = new Map();
  nodeMap.set(root, "root");
  const res = [];

  while (node.length) {
    const now_node = node.shift();
    const now_nodeSum = nodeSum.shift();
    const left = now_node.left;
    const right = now_node.right;

    // 叶子节点且路径和等于目标值
    if (!left && !right && now_nodeSum === targetSum) {
      let temp = now_node;
      let path = [];
      while (temp !== "root") {
        path.unshift(temp.val);
        temp = nodeMap.get(temp);
      }
      res.push(path);
    }

    if (left) {
      node.push(left);
      nodeSum.push(now_nodeSum + left.val);
      nodeMap.set(left, now_node);
    }

    if (right) {
      node.push(right);
      nodeSum.push(now_nodeSum + right.val);
      nodeMap.set(right, now_node);
    }
  }

  return res;
};
// @lc code=end

// dfs
const pathSum_v1 = function (root, targetSum) {
  const res = [];
  const helper = function (tree, num, path) {
    if (!tree) return false;
    if (!tree.left && !tree.right) {
      if (!(num - tree.val)) {
        return res.push([...path, tree.val]);
      }
    }
    helper(tree.left, num - tree.val, [...path, tree.val]);
    helper(tree.right, num - tree.val, [...path, tree.val]);
  };
  helper(root, targetSum, []);
  return res;
};

// bfs
const pathSum_v2 = function (root, targetSum) {
  if (!root) return [];
  const node = [root];
  const nodeSum = [root.val];
  const nodePath = [[root.val]];
  const res = [];

  while (node.length) {
    const now_node = node.shift();
    const now_nodeSum = nodeSum.shift();
    const now_path = nodePath.shift();
    const left = now_node.left;
    const right = now_node.right;

    // 叶子节点且路径和等于目标值
    if (!left && !right && now_nodeSum === targetSum) res.push(now_path);

    if (left) {
      node.push(left);
      nodeSum.push(now_nodeSum + left.val);
      nodePath.push([...now_path, left.val]);
    }

    if (right) {
      node.push(right);
      nodeSum.push(now_nodeSum + right.val);
      nodePath.push([...now_path, right.val]);
    }
  }

  return res;
};

// 为了节省空间，可以使用哈希表记录树中的每一个节点的父节点。
// 每次找到一个满足条件的节点，我们就从该节点出发不断向父节点迭代，即可还原出从根节点到当前节点的路径。

const pathSum_v3 = function (root, targetSum) {
  if (!root) return [];
  const node = [root];
  const nodeSum = [root.val];
  const nodeMap = new Map();
  nodeMap.set(root, "root");
  const res = [];

  while (node.length) {
    const now_node = node.shift();
    const now_nodeSum = nodeSum.shift();
    const left = now_node.left;
    const right = now_node.right;

    // 叶子节点且路径和等于目标值
    if (!left && !right && now_nodeSum === targetSum) {
      let temp = now_node;
      let path = [];
      while (temp !== "root") {
        path.unshift(temp.val);
        temp = nodeMap.get(temp);
      }
      res.push(path);
    }

    if (left) {
      node.push(left);
      nodeSum.push(now_nodeSum + left.val);
      nodeMap.set(left, now_node);
    }

    if (right) {
      node.push(right);
      nodeSum.push(now_nodeSum + right.val);
      nodeMap.set(right, now_node);
    }
  }

  return res;
};
