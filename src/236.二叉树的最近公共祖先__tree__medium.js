/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function (root, p, q) {
  const nodeMap = new Map();
  nodeMap.set(root, null);
  const visited = new Set();

  const dfs = function (tree) {
    if (tree.left) {
      nodeMap.set(tree.left.val, tree);
      dfs(tree.left);
    }

    if (tree.right) {
      nodeMap.set(tree.right.val, tree);
      dfs(tree.right);
    }
  };
  dfs(root);
  let pp = p;
  while (pp) {
    visited.add(pp.val);
    pp = nodeMap.get(pp.val);
  }

  let qp = q;
  while (qp) {
    if (visited.has(qp.val)) return qp;
    qp = nodeMap.get(qp.val);
  }

  return qp;
};
// @lc code=end

// 记录到 p 和 q 的路径，找到公共祖先
// dfs 记录路径  回溯
const lowestCommonAncestor_v1 = function (root, p, q) {
  const pathP = [];
  const pathQ = [];
  const bracktrack = function (tree, target, track, res) {
    if (!tree) return;
    if (target === tree.val) {
      res.splice(0, 0, ...track, tree);
      return;
    }
    // 做决策
    track.push(tree);
    // 下一层
    bracktrack(tree.left, target, track, res);
    bracktrack(tree.right, target, track, res);
    // 撤销
    track.pop();
  };
  bracktrack(root, p.val, [], pathP);
  bracktrack(root, q.val, [], pathQ);

  const pl = pathP.length;
  const ql = pathQ.length;

  for (let i = Math.min(pl, ql) - 1; i >= 0; i--) {
    if (pathP[i] === pathQ[i]) {
      return pathP[i];
    }
  }
};

// (inL && inR) || ((root.val === p || root.val === q) && (inL || inR))
// 后序， 自底向上
const lowestCommonAncestor_v2 = function (root, p, q) {
  let ans = null;

  const dfs = function (tree, p, q) {
    if (!tree) return false;

    const inL = dfs(tree.left, p, q);
    const inR = dfs(tree.right, p, q);

    if (
      (inL && inR) ||
      ((tree.val === p.val || tree.val === q.val) && (inL || inR))
    ) {
      ans = tree;
    }

    return inL || inR || tree.val === p.val || tree.val === q.val;
  };

  dfs(root, p, q);
  return ans;
};

// 记录父节点，这就有点巧妙了
const lowestCommonAncestor_v3 = function (root, p, q) {
  const nodeMap = new Map();
  nodeMap.set(root, null);
  const visited = new Set();

  const dfs = function (tree) {
    if (tree.left) {
      nodeMap.set(tree.left.val, tree);
      dfs(tree.left);
    }

    if (tree.right) {
      nodeMap.set(tree.right.val, tree);
      dfs(tree.right);
    }
  };
  dfs(root);
  let pp = p;
  while (pp) {
    visited.add(pp.val);
    pp = nodeMap.get(pp.val);
  }

  let qp = q;
  while (qp) {
    if (visited.has(qp.val)) return qp;
    qp = nodeMap.get(qp.val);
  }

  return qp;
};
