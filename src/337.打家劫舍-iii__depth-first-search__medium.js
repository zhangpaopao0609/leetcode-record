/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
const rob = function (root) {
  const dp = function (tree) {
    if (!tree) return [0, 0];
    const left = dp(tree.left);
    const right = dp(tree.right);

    // 抢
    const rob = left[0] + right[0] + tree.val;
    // 不抢
    const not_rob = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);

    return [not_rob, rob];
  };
  const res = dp(root);
  return Math.max(res[0], res[1]);
};
// @lc code=end

// dp(tree) 这个地方所能获得的最大值只有两种情况
// 1. 它本身不抢，那么就是它的左右子树之和
// 2. 它要抢，那么就是它左子树的左右子树 + 它右子树的左右子树
// 哪个大就取哪一个
// dp 用于消除重叠
const rob_v1 = function (root) {
  const dp = new Map();
  const rob = function (tree) {
    if (!tree) return 0;
    let left = 0;
    let right = 0;
    if (dp.has(tree)) {
      return dp.get(tree);
    }
    if (tree.left) {
      left = rob(tree.left.left) + rob(tree.left.right);
    }
    if (tree.right) {
      right = rob(tree.right.left) + rob(tree.right.right);
    }
    dp.set(
      tree,
      Math.max(rob(tree.left) + rob(tree.right), left + right + tree.val)
    );
    return dp.get(tree);
  };

  return rob(root);
};

const rob_v2 = function (root) {
  const dp = function (tree) {
    if (!tree) return [0, 0];
    const left = dp(tree.left);
    const right = dp(tree.right);
    // 抢
    const rob = left[0] + right[0] + tree.val;
    // 不抢
    const not_rob = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    return [not_rob, rob];
  };
  const res = dp(root);
  return Math.max(res[0], res[1]);
};
