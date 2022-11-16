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
  const studied = [];

  const dfs = function (prerequisites, waited, needStudy) {
    if (studied.includes(needStudy)) {
      studied.push(...waited);
      return true;
    }
    waited.push(needStudy);
    for (let i = 0; i < prerequisites.length; i++) {
      const n = prerequisites[i];
      if (studied.includes(n[0])) {
        continue;
      }
      if (n[0] === needStudy) {
        return dfs(prerequisites, waited, n[1]);
      }
    }
    studied.push(...waited);
    return true;
  };

  for (let i = 0; i < prerequisites.length; i++) {
    if (!dfs(prerequisites, [], prerequisites[i][0])) {
      return false;
    }
  }

  return true;
};
// @lc code=end

// dfs
const canFinish_v1 = function (numCourses, prerequisites) {
  // 记录已经学习的课程
  const studied = [];
  // 在需要前置学习的课程中，如果需要前置课程还有前置课程，那就继续 dfs，直到前置课程已学习或者没有前置课程了，为 true
  // 如果前置课程在待学习的课程中，那么为 false，
  let waited = [];

  const dfs = function (prerequisites, needStudy) {
    if (studied.includes(needStudy)) {
      // 需要学习的课程已学习
      studied.push(...waited);
      waited = [];
      return true;
    }
    // 如果需要学习的课程没有学习，那么就找一下是否有前置课程
    for (let i = 0; i < prerequisites.length; i++) {
      const n = prerequisites[i];
      if (n[0] === needStudy) {
        // 有前置课程
        waited.push(needStudy);
        return dfs(prerequisites, n[1]);
      }
    }
    // 如果没有前置课程
    studied.push(...waited, needStudy);
    waited = [];
    return true;
  };

  for (let i = 0; i < prerequisites.length; i++) {
    if (!dfs(prerequisites, prerequisites[i][0])) {
      return false;
    }
  }

  return true;
};

console.log(
  canFinish_v1(2, [
    [1, 0],
    [0, 1],
  ])
);
