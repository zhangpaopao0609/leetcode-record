/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  if (!digits) return [];
  const res = [];

  const mp = new Map();
  mp.set("2", ["a", "b", "c"]);
  mp.set("3", ["d", "e", "f"]);
  mp.set("4", ["g", "h", "i"]);
  mp.set("5", ["j", "k", "l"]);
  mp.set("6", ["m", "n", "o"]);
  mp.set("7", ["p", "q", "r", "s"]);
  mp.set("8", ["t", "u", "v"]);
  mp.set("9", ["w", "x", "y", "z"]);

  const backtrack = function (mp, track, digits) {
    const depth = track.length;
    if (depth === digits.length) {
      res.push(track.join(""));
      return;
    }
    // 选择项

    const options = mp.get(digits[depth]);
    for (let i = 0; i < options.length; i++) {
      // 作选择
      const n = options[i];
      track.push(n);
      // 进入下一层
      backtrack(mp, track, digits);
      // 撤销
      track.pop();
    }
  };
  backtrack(mp, [], digits);
  return res;
};
// @lc code=end

// 典型的回溯
const letterCombinations_v1 = function (digits) {
  const res = [];

  const mp = new Map();

  for (let i = 2; i < 10; i++) {
    mp.set(i.toString(), [
      String.fromCharCode(95 + i),
      String.fromCharCode(96 + i),
      String.fromCharCode(97 + i),
    ]);
  }

  const backtrack = function (mp, track, digits) {
    const depth = track.length;
    if (depth === digits.length) {
      res.push(track.join());
    }
    // 选择项
    const options = mp.get(digits[depth]);
    for (let i = 0; i < options.length; i++) {
      // 作选择
      const n = options[i];
      track.push(n);
      // 进入下一层
      backtrack(mp, track, digits);
      // 撤销
      track.pop();
    }
  };

  return res;
};
