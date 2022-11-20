/*
 * @lc app=leetcode.cn id=384 lang=javascript
 *
 * [384] 打乱数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
const Solution = function (nums) {
  this.nums = nums;
  this.original = this.nums.slice();
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  this.nums = this.original.slice();
  return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const l = this.nums.length;
  for (let i = 0; i < l; i++) {
    const j = Math.floor(Math.random() * (l - i)) + i;
    const temp = this.nums[i];
    this.nums[i] = this.nums[j];
    this.nums[j] = temp;
  }

  return this.nums;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end
