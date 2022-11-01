/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
const mergeTrees = function (root1, root2) {
  if (!root1 && !root2) return null;
  if (!root1 || !root2) return root1 || root2;

  const node1 = [root1];
  const node2 = [root2];
  const res = new TreeNode(root1.val + root2.val);
  const nodeRes = [res];

  while (node1.length) {
    const now_node1 = node1.shift();
    const now_node2 = node2.shift();
    const now_nodeRes = nodeRes.shift();
    const left1 = now_node1.left;
    const right1 = now_node1.right;
    const left2 = now_node2.left;
    const right2 = now_node2.right;

    if (left1 && left2) {
      node1.push(left1);
      node2.push(left2);
      const temp = new TreeNode(left1.val + left2.val);
      now_nodeRes.left = temp;
      nodeRes.push(temp);
    } else if (left1 || left2) {
      now_nodeRes.left = left1 || left2;
    }

    if (right1 && right2) {
      node1.push(right1);
      node2.push(right2);
      const temp = new TreeNode(right1.val + right2.val);
      now_nodeRes.right = temp;
      nodeRes.push(temp);
    } else if (right1 || right2) {
      now_nodeRes.right = right1 || right2;
    }
  }

  return res;
};
// @lc code=end

// dfs
const mergeTrees_v1 = function (root1, root2) {
  if (!root1 && !root2) return null;
  if (!root1 || !root2) return root1 || root2;
  return new TreeNode(
    root1.val + root2.val,
    mergeTrees_v1(root1.left, root2.left),
    mergeTrees_v1(root1.right, root2.right)
  );
};

// bfs
const mergeTrees_v2 = function (root1, root2) {
  if (!root1 && !root2) return null;
  if (!root1 || !root2) return root1 || root2;

  const node1 = [root1];
  const node2 = [root2];
  const res = new TreeNode(root1.val + root2.val);
  const nodeRes = [res];

  while (node1.length) {
    const now_node1 = node1.shift();
    const now_node2 = node2.shift();
    const now_nodeRes = nodeRes.shift();
    const left1 = now_node1.left;
    const right1 = now_node1.right;
    const left2 = now_node2.left;
    const right2 = now_node2.right;

    if (left1 && left2) {
      node1.push(left1);
      node2.push(left2);
      const temp = new TreeNode(left1.val + left2.val);
      now_nodeRes.left = temp;
      nodeRes.push(temp);
    } else if (left1 || left2) {
      now_nodeRes.left = left1 || left2;
    }

    if (right1 && right2) {
      node1.push(right1);
      node2.push(right2);
      const temp = new TreeNode(right1.val + right2.val);
      now_nodeRes.right = temp;
      nodeRes.push(temp);
    } else if (right1 || right2) {
      now_nodeRes.right = right1 || right2;
    }
  }

  return res;
};
