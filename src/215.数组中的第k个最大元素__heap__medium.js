/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function (arr, k) {
  const swap = function (arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  const heapArr = [null];
  const swim = function (k) {
    while (k > 1) {
      const j = Math.floor(k / 2);
      if (heapArr[j] >= heapArr[k]) return;
      swap(heapArr, j, k);
      k = j;
    }
  };

  const sink = function (k) {
    const N = heapArr.length - 1;
    while (2 * k <= N) {
      let j = 2 * k;
      if (j < N && heapArr[j] < heapArr[j + 1]) j++;
      if (heapArr[j] <= heapArr[k]) return;
      swap(heapArr, j, k);
      k = j;
    }
  };

  for (let i = 0; i < arr.length; i++) {
    heapArr.push(arr[i]);
    swim(i + 1);
  }
  for (let i = 0; i < k - 1; i++) {
    swap(heapArr, 1, heapArr.length - 1);
    heapArr.pop();
    sink(1);
  }

  return heapArr[1];
};
// @lc code=end

// 利用快排实现
const findKthLargest_v1 = function (nums, k) {
  const swap = function (arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  const partition = function (arr, l, r) {
    const v = arr[l];
    let i = l;
    let j = r + 1;
    while (true) {
      while (v < arr[++i]) if (i === r) break;
      while (v > arr[--j]) if (j === l) break;
      if (i >= j) break;
      swap(arr, i, j); // i 是小于等于 v,j 是大于等于 v，所以返回 j
    }
    swap(arr, l, j);
    return j;
  };

  const findByQuickSort = function (arr, l, r) {
    if (l >= r) return arr[r];
    const p = partition(arr, l, r);
    if (p > k - 1) {
      // 左边找
      return findByQuickSort(arr, l, p - 1);
    } else if (p < k - 1) {
      // 右边找
      return findByQuickSort(arr, p + 1, r);
    } else {
      return arr[p];
    }
  };

  return findByQuickSort(nums, 0, nums.length - 1);
};

const findKthLargest_v2 = function (arr, k) {
  const swap = function (arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  const heapArr = [null];
  const swim = function (k) {
    while (k > 1) {
      const j = Math.floor(k / 2);
      if (heapArr[j] >= heapArr[k]) return;
      swap(heapArr, j, k);
      k = j;
    }
  };

  const sink = function (k) {
    const N = heapArr.length - 1;
    while (2 * k <= N) {
      let j = 2 * k;
      if (j < N && heapArr[j] < heapArr[j + 1]) j++;
      if (heapArr[j] <= heapArr[k]) return;
      swap(heapArr, j, k);
      k = j;
    }
  };

  for (let i = 0; i < arr.length; i++) {
    heapArr.push(arr[i]);
    swim(i + 1);
  }
  for (let i = 0; i < k - 1; i++) {
    swap(heapArr, 1, heapArr.length - 1);
    heapArr.pop();
    sink(1);
  }

  return heapArr[1];
};
