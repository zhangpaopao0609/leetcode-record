/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function (preorder, inorder) {
  const l = preorder.length;
  // 构造哈希表，帮助快速定位
  const treeMap = new Map();
  for (let i = 0; i < l; i++) {
    treeMap.set(inorder[i], i);
  }

  const build = function (
    preorder,
    inorder,
    preorder_start, // 树前序开始的位置
    preorder_end, // 树前序结束的位置 通过这两个位置就能得到树的前序
    inorder_start, // 树中序开始的位置
    inorder_end // 树中序结束的位置 通过这两个位置就能得到树的中序
  ) {
    if (preorder_start > preorder_end) return null;
    // 前序的第一个元素就是根
    const rootVal = preorder[preorder_start];
    // 找到根对应的中序位置，那么就能知道左右子树的元素个数了
    const rootIndex = treeMap.get(rootVal);
    // 构造根节点
    const root = new TreeNode(rootVal);
    // 构造左子树
    root.left = build(
      preorder,
      inorder,
      preorder_start + 1, // 左树前序开始的位置 = 前序中根节点 + 1
      preorder_start + rootIndex - inorder_start, // 左树前序结束的位置 = 前序中根节点 + 左树的数量（根对应的前序位置 - 中序开始的位置）
      inorder_start, // 左树中序开始的位置
      rootIndex - 1 // 左树中序结束的位置
    );
    root.right = build(
      preorder,
      inorder,
      preorder_start + rootIndex - inorder_start + 1, // 右树前序开始的位置 = 前序中根节点 + 左树的数量 + 1
      preorder_end, // 右树前序结束的位置
      rootIndex + 1, // 右树中序开始的位置
      inorder_end // 右树中序结束的位置
    );
    return root;
  };

  return build(preorder, inorder, 0, l - 1, 0, l - 1);
};
// @lc code=end
// 前序 [ 根节点, [左子树的前序遍历结果], [右子树的前序遍历结果] ]
// 中序 [ [左子树的中序遍历结果], 根节点, [右子树的中序遍历结果] ]
const buildTree_v1 = function (preorder, inorder) {
  const l = preorder.length;
  // 构造哈希表，帮助快速定位
  const treeMap = new Map();
  for (let i = 0; i < l; i++) {
    treeMap.set(inorder[i], i);
  }

  const build = function (
    preorder,
    inorder,
    preorder_start, // 树前序开始的位置
    preorder_end, // 树前序结束的位置 通过这两个位置就能得到树的前序
    inorder_start, // 树中序开始的位置
    inorder_end // 树中序结束的位置 通过这两个位置就能得到树的中序
  ) {
    if (preorder_start < preorder_end) return null;
    // 前序的第一个元素就是根
    const rootVal = preorder[preorder_start];
    // 找到根对应的中序位置，那么就能知道左右子树的元素个数了
    const rootIndex = treeMap.get(r);
    // 构造根节点
    const root = new TreeNode(rootVal);
    // 构造左子树
    root.left = build(
      preorder,
      inorder,
      preorder_start + 1, // 左树前序开始的位置 = 前序中根节点 + 1
      preorder_start + rootIndex - inorder_start, // 左树前序结束的位置 = 前序中根节点 + 左树的数量（根对应的前序位置 - 中序开始的位置）
      inorder_start, // 左树中序开始的位置
      rootIndex - 1 // 左树中序结束的位置
    );
    root.right = build(
      preorder,
      inorder,
      preorder_start + rootIndex - inorder_start + 1, // 右树前序开始的位置 = 前序中根节点 + 左树的数量 + 1
      preorder_end, // 右树前序结束的位置
      rootIndex + 1, // 右树中序开始的位置
      inorder_end // 右树中序结束的位置
    );
  };

  return build(preorder, inorder, 0, l - 1, 0, l - 1);
};
