/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = function (s) {
  // 路径
  // 选择
  const l = s.length;
  const result = [];

  const backtrack = function (track, pos, depth) {
    // 最多只能 4 层
    if (depth > 4) return;
    // 刚好把 s 分割完同时深度为 4
    if (pos === l && depth === 4) {
      return result.push(track.join("."));
    }

    for (let i = 1; i <= 3; i++) {
      // 总共可选择的只有 1，2，3 个数字

      // 无效的分支
      // 当总长大于字符长度时，无效
      if (pos + i > l) continue;
      const n = s.slice(pos, pos + i);
      // 以 0 为先导时，失效
      if (i > 1 && n[0] === "0") return;
      // 大于 255 失效
      if (Number(n) > 255) return;

      // 选择
      track.push(n);
      pos += i;

      // 下一个决策
      backtrack(track, pos, depth + 1);

      // 撤销
      track.pop();
      pos -= i;
    }
  };
  backtrack([], 0, 0);
  return result;
};
// @lc code=end

// 典型的回溯呀
const restoreIpAddresses_v1 = function (s) {
  // 路径
  // 选择
  const l = s.length;
  const result = [];

  const backtrack = function (track, pos, depth) {
    // 最多只能 4 层
    if (depth > 4) return;
    // 刚好把 s 分割完同时深度为 4
    if (pos === l && depth === 4) {
      return result.push(track.join("."));
    }

    for (let i = 1; i <= 3; i++) {
      // 总共可选择的只有 1，2，3 个数字

      // 无效的分支
      // 当总长大于字符长度时，无效
      if (pos + i > l) continue;
      const n = s.slice(pos, pos + i);
      // 以 0 为先导时，失效
      if (i > 1 && n[0] === "0") return;
      // 大于 255 失效
      if (Number(n) > 255) return;

      // 选择
      track.push(n);
      pos += i;

      // 下一个决策
      backtrack(track, pos, depth + 1);

      // 撤销
      track.pop();
      pos -= i;
    }
  };
  backtrack([], 0, 0);
  return result;
};
