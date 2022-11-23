/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function (root, k) {
  const nodeNum = new Map();

  const nodeCount = function (tree) {
    if (!tree) return 0;
    const left = nodeCount(tree.left);
    const right = nodeCount(tree.right);
    nodeNum.set(tree, left + right + 1);
    return left + right + 1;
  };

  const kthSmallest = function (tree, k) {
    let node = tree;
    while (node) {
      const num = nodeNum.get(node.left) || 0;
      if (num > k - 1) {
        node = node.left;
      } else if (num < k - 1) {
        node = node.right;
        k -= num + 1;
      } else {
        return node.val;
      }
    }
  };

  nodeCount(root);
  return kthSmallest(root, k);
};
// @lc code=end

const kthSmallest_v1 = function (root, k) {
  const res = [];

  const dfs = function (tree) {
    if (!tree) return;
    dfs(tree.left);
    res.push(tree.val);
    dfs(tree.right);
  };
  dfs(root);
  return res[k - 1];
};

// 中序遍历 迭代版本
const kthSmallest_v2 = function (root, k) {
  const stack = [];

  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();
    --k;
    if (k === 0) {
      break;
    }
    root = root.right;
  }

  return root.val;
};

// 根节点记录个数
const kthSmallest_v3 = function (root, k) {
  const nodeCount = function (tree) {
    if (!tree) return 0;
    const left = nodeCount(tree.left);
    const right = nodeCount(tree.right);
    tree.count = left + right + 1;
    return tree.count;
  };
  nodeCount(root);
  console.log(root);
};
