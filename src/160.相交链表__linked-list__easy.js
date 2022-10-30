/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function (headA, headB) {
  let pA = headA;
  let pB = headB;

  while (pA !== pB) {
    pA = pA !== null ? pA.next : headB;
    pB = pB !== null ? pB.next : headA;
  }

  return pA;
};
// @lc code=end

// hash table
const getIntersectionNode_v1 = function (headA, headB) {
  let a = headA;
  const m = new Set();
  while (a) {
    m.add(a);
    a = a.next;
  }

  let b = headB;
  while (b) {
    if (m.has(b)) return b;
    b = b.next;
  }

  return null;
};

// 错的人终究会错过，而对的人迟早会相遇
const getIntersectionNode_v2 = function (headA, headB) {
  let pA = headA;
  let pB = headB;

  while (pA !== pB) {
    pA = pA !== null ? pA.next : headB;
    pB = pB !== null ? pB.next : headA;
  }

  return null;
};
