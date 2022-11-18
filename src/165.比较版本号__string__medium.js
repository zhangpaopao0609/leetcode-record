/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
const compareVersion = function (version1, version2) {
  const l1 = version1.length;
  const l2 = version2.length;

  let p1 = 0;
  let p2 = 0;
  while (p1 < l1 || p2 < l2) {
    let n1 = 0;
    while (p1 < l1 && version1[p1] !== ".") {
      n1 = n1 * 10 + version1[p1].charCodeAt() - "0".charCodeAt();
      p1++;
    }
    p1++;

    let n2 = 0;
    while (p2 < l2 && version2[p2] !== ".") {
      n2 = n2 * 10 + version2[p2].charCodeAt() - "0".charCodeAt();
      p2++;
    }
    p2++;

    if (n1 !== n2) {
      return n1 > n2 ? 1 : -1;
    }
  }

  return 0;
};
// @lc code=end

const compareVersion_v1 = function (version1, version2) {
  const a1 = version1.split(".");
  const a2 = version2.split(".");
  const l = Math.max(a1.length, a2.length);

  for (let i = 0; i < l; i++) {
    const n1 = a1[i] ? Number(a1[i]) : 0;
    const n2 = a2[i] ? Number(a2[i]) : 0;

    if (n1 > n2) {
      return 1;
    } else if (n1 < n2) {
      return -1;
    }
  }

  return 0;
};

// 利用双指针消除空间
const compareVersion_v2 = function (version1, version2) {
  const l1 = version1.length;
  const l2 = version2.length;

  let p1 = 0;
  let p2 = 0;
  while (p1 < l1 || p2 < l2) {
    let n1 = 0;
    let unit1 = 1;
    while (p1 < l1 && version1[p1++] !== ".") {
      // 得出数字结果
      n1 += version1 * unit1;
      unit1 *= 10;
    }

    let n2 = 0;
    let unit2 = 1;
    while (p2 < l2 && version2[p2++] !== ".") {
      // 得出数字结果
      n2 += version2 * unit2;
      unit2 *= 10;
    }

    if (n1 !== n2) {
      return n1 > n2 ? 1 : -1;
    }
  }

  return 0;
};
