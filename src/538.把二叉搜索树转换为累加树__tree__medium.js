/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
const convertBST = function (root) {
  let sum = 0;
  const helper = function (tree) {
    if (!tree) return 0;
    helper(tree.right);
    sum += tree.val;
    tree.val = sum;
    helper(tree.left);
  };

  helper(root);
  return root;
};
// @lc code=end

const convertBST_v1 = function (root) {
  // 反序中序遍历
  let sum = 0;
  const helper = function (tree) {
    if (!tree) return 0;
    helper(tree.right);
    sum += tree.val;
    tree.val = sum;
    helper(tree.left);
  };

  helper(root);
  return root;
};
