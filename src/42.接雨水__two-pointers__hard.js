/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function (height) {
  const l = height.length;
  let left = 0,
    leftMax = height[0],
    right = l - 1,
    rightMax = height[l - 1],
    sum = 0;

  while (left < right) {
    const h_left = height[left];
    const h_right = height[right];
    if (h_left < h_right) {
      leftMax = h_left > leftMax ? h_left : leftMax;
      sum += leftMax - h_left;
      left++;
    } else {
      rightMax = h_right > rightMax ? h_right : rightMax;
      sum += rightMax - h_right;
      right--;
    }
  }

  return sum;
};
// @lc code=end

const trap_v1 = function (height) {
  // 双指针，一前一后，p q
  // 如果 height[p] >= height[q], 计算 (p - q)*height[q]，q = p, p++
  const getOneSideSum = function (height) {
    let sum = 0;
    const l = height.length;
    if (l <= 2) return [0, 0];
    let front = 1;
    let after = 0;
    let rest = 0;

    while (front < l) {
      if (height[front] >= height[after]) {
        if (height[after] !== 0) {
          sum += (front - after - 1) * height[after] - rest;
        }
        after = front;
        rest = 0;
      } else {
        rest += height[front];
      }
      front++;
    }

    return [sum, after];
  };
  const [leftS, highest] = getOneSideSum(height);
  const [rightS, _] = getOneSideSum(
    highest === 0 ? height.reverse() : height.slice(highest - 1).reverse()
  );
  return leftS + rightS;
};

const trap_v2 = function (height) {
  // 左边 left leftMax
  // 右边 right rightMax
  // i 能接的雨水 = min(leftMax, rightMax) - height[i]
  const l = height.length;
  let left = 0,
    leftMax = height[0],
    right = l - 1,
    rightMax = height[l - 1],
    sum = 0;

  while (left < right) {
    const h_left = height[left];
    const h_right = height[right];
    if (h_left < h_right) {
      leftMax = h_left > leftMax ? h_left : leftMax;
      sum += leftMax - h_left;
      left++;
    } else {
      rightMax = h_right > rightMax ? h_right : rightMax;
      sum += rightMax - h_right;
      right--;
    }
  }

  return sum;
};
