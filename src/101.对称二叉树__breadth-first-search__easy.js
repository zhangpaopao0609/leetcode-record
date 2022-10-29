/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */

const isSymmetric = function (tree) {
  const q = [];
  q.push(tree);
  q.push(tree);

  while (q.length) {
    const l = q.shift();
    const r = q.shift();

    if (!l && !r) continue;
    if (!l || !r) return false;
    if (l.val !== r.val) return false;

    q.push(l.left);
    q.push(r.right);

    q.push(l.right);
    q.push(r.left);
  }

  return true;
};
// @lc code=end

// 递归
// 假设有两个树，左树和右树要镜像的话，那么两个指针，p，q，p 向左，q 向右，然后比较是否相等
const isEqual = function (p, q) {
  if (!p && !q) return true; // 均为空
  if (!p || !q) return false; // 其中一个为空
  return (
    p.val === q.val && isEqual(p.left, q.right) && isEqual(p.right, q.left)
  );
};

const isSymmetric_v1 = function (tree) {
  return isEqual(tree, tree);
};

// bfs
// 同样是两个树，一个取左，一个取右，然后广度优先
const isSymmetric_v2 = function (tree) {
  const q = [];
  q.push(tree);
  q.push(tree);

  while (q.length) {
    const l = q.shift();
    const r = q.shift();

    if (!l && !r) continue;
    if (!l || !r) return false;
    if (l.val !== r.val) return false;

    q.push(l.left);
    q.push(r.right);

    q.push(l.right);
    q.push(r.left);
  }

  return true;
};
