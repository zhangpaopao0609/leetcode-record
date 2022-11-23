/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start

const MinStack = function () {
  this.valStack = [];
  this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.valStack.push(val);
  if (this.minStack.length === 0) {
    this.minStack.push(val);
  } else {
    const min = this.minStack[this.minStack.length - 1];
    this.minStack.push(val > min ? min : val);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.valStack.pop();
  this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.valStack[this.valStack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.valStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
