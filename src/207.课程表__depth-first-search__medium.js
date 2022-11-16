/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = function (numCourses, prerequisites) {
  const edges = new Array(numCourses).fill(-1).map(() => new Array());
  // 每一个节点的 入度
  const indeg = new Array(numCourses).fill(0);

  for (const info of prerequisites) {
    const n0 = info[0];
    const n1 = info[1];
    edges[n0].push(n1);
    indeg[n1]++;
  }

  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (indeg[i] === 0) {
      queue.push(i);
    }
  }

  let finish = 0;
  while (queue.length) {
    const n = queue.shift();
    finish++;
    for (const v of edges[n]) {
      indeg[v]--;
      if (indeg[v] === 0) {
        queue.push(v);
      }
    }
  }

  return finish === numCourses;
};
// @lc code=end

// dfs 拓扑排序
const canFinish_v1 = function (numCourses, prerequisites) {
  let valid = true;
  // 0 未搜索 1 搜索中 2 已完成搜索
  const visited = new Array(numCourses).fill(0);
  const edges = new Array(numCourses).fill(-1).map(() => new Array());

  for (const info of prerequisites) {
    edges[info[1]].push(info[0]);
  }

  const dfs = function (u) {
    visited[u] = 1;
    for (const v of edges[u]) {
      const ns = visited[v];
      if (ns === 0) {
        // 未搜索
        dfs(v);
        if (!valid) return;
      } else if (ns === 1) {
        // 搜索中
        valid = false;
        return;
      }
    }
    visited[u] = 2;
  };

  for (let i = 0; i < numCourses && valid; i++) {
    if (visited[i] === 0) {
      dfs(i);
    }
  }

  return valid;
};

// bfs 拓扑排序
const canFinish_v2 = function (numCourses, prerequisites) {
  const edges = new Array(numCourses).fill(-1).map(() => new Array());
  // 每一个节点的 入度
  const indeg = new Array(numCourses).fill(0);

  for (const info of prerequisites) {
    const n0 = info[0];
    const n1 = info[1];
    edges[n0].push(n1);
    indeg[n1]++;
  }

  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (indeg[i] === 0) {
      queue.push(i);
    }
  }

  let finish = 0;
  while (queue.length) {
    const n = queue.shift();
    finish++;
    for (const v of edges[n]) {
      indeg[v]--;
      if (indeg[v] === 0) {
        queue.push(v);
      }
    }
  }

  return finish === numCourses;
};
