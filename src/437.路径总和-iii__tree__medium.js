/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @return {number}
 */

const pathSum = function (root, targetSum) {
  if (!root) return 0;
  const pathRootSum = function (tree, targetSum) {
    let count = 0;
    if (!tree) return 0;
    if (tree.val === targetSum) count++;

    return (
      count +
      pathRootSum(tree.left, targetSum - tree.val) +
      pathRootSum(tree.right, targetSum - tree.val)
    );
  };
  return (
    pathRootSum(root, targetSum) +
    pathSum(root.left, targetSum) +
    +pathSum(root.right, targetSum)
  );
};
// @lc code=end

// dfs
const pathRootSum = function (tree, targetSum) {
  let count = 0;
  if (!tree) return 0;
  if (tree.val === targetSum) count++;

  return (
    count +
    pathRootSum(tree.left, targetSum - tree.val) +
    pathRootSum(tree.right, targetSum - tree.val)
  );
};

const pathSum_v1 = function (root, targetSum) {
  if (!root) return 0;
  return (
    pathRootSum(root, targetSum) +
    pathSum_v1(root.left, targetSum) +
    +pathSum_v1(root.right, targetSum)
  );
};
