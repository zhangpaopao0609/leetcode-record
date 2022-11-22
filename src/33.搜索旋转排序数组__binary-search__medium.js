/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  const len = nums.length;
  if (!len) return -1;
  let l = 0;
  let r = len - 1;

  while (l <= r) {
    const mid = (r + l) >> 1;
    const n = nums[mid];
    if (n == target) {
      return mid;
    }
    // 左侧有序
    if (nums[0] <= n) {
      if (nums[0] <= target && target < n) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      // 右侧有序
      if (nums[len - 1] >= target && target > n) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }

  return -1;
};
// @lc code=end

const search_v1 = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const mid = ((r - l) >> 1) + l;
    const n = nums[mid];

    if (n > target) {
      // 如果左侧有序，那么看看左侧的最小值是否大于目标值，如果大于，留下右侧，否者留下左侧
      // 如果左侧无序，那么右侧一定有序，直接保留左侧
      if (nums[l] <= n) {
        // 有序
        if (nums[l] > target) {
          l = mid + 1;
        } else if (nums[l] < target) {
          r = mid - 1;
        } else {
          return l;
        }
      } else {
        // 无序
        r = mid - 1;
      }
    } else if (n < target) {
      // 如果右侧有序，那么看看右侧的最大值是否大于目标值，如果大于，留下右侧，否者留下左侧
      // 如果右侧无序，那么左侧一定有序，直接保留右侧
      if (nums[r] > n) {
        // 有序
        if (nums[r] >= target) {
          l = mid + 1;
        } else if (nums[r] < target) {
          r = mid - 1;
        } else {
          return r;
        }
      } else {
        // 无序
        l = mid + 1;
      }
    } else {
      return mid;
    }
  }

  return -1;
};

const search_v2 = function (nums, target) {
  const len = nums.length;
  if (!len) return -1;
  let l = 0;
  let r = len - 1;

  while (l <= r) {
    const mid = (r + l) >> 1;
    const n = nums[mid];
    if (n == target) {
      return mid;
    }
    // 左侧有序
    if (nums[0] <= n) {
      if (nums[0] <= target && target < n) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      // 右侧有序
      if (nums[len - 1] >= target && target > n) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }

  return -1;
};
