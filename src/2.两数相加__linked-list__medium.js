/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  let l = new ListNode(-1);
  const r = l;
  let next = 0;
  while (l1 || l2 || next) {
    const v1 = l1 ? l1.val : 0;
    const v2 = l2 ? l2.val : 0;
    const v = v1 + v2 + next;
    const nv = v % 10;
    l.next = new ListNode(nv);
    l = l.next;
    next = (v - nv) / 10;
    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next);
  }

  return r.next;
};
// @lc code=end

// 按照题意
// 和相加
// 这样直接相加是不行得，因为会溢出
const addTwoNumbers_v1 = function (l1, l2) {
  const getLinkSum = function (link) {
    let sum = 0;
    let unit = 1;
    while (link) {
      sum += link.val * unit;
      unit *= 10;
      link = link.next;
    }
    return sum;
  };

  let sum = getLinkSum(l1) + getLinkSum(l2);
  if (!sum) return new ListNode(0);
  let l = new ListNode(-1);
  const r = l;
  while (sum) {
    const v = sum % 10;
    const n = new ListNode(v);
    l.next = n;
    l = l.next;
    sum = (sum - v) / 10;
  }

  return r.next;
};

// 以最长的链表
// 短的不足则为 0
// 相加，然后注意进位即可

const addTwoNumbers_v2 = function (l1, l2) {
  let l = new ListNode(-1);
  const r = l;
  let next = 0;
  while (l1 || l2 || next) {
    const v1 = l1 ? l1.val : 0;
    const v2 = l2 ? l2.val : 0;
    const v = v1 + v2 + next;
    const nv = v % 10;
    l.next = new ListNode(nv);
    l = l.next;
    next = (v - nv) / 10;
    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next);
  }

  return r.next;
};
