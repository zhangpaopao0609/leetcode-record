/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
  let s = head; // 每次走一步
  let f = head; // 每次走两步
  while (f && f.next) {
    s = s.next;
    f = f.next.next;
    if (s === f) return true;
  }

  return false;
};
// @lc code=end

// hash table
const hasCycle_v1 = function (head) {
  const m = new Set();
  let p = head;
  while (p) {
    p = p.next;
    if (m.has(p)) return true;
    m.add(p);
  }
  return false;
};

// 双指针，龟兔赛跑
const hasCycle_v2 = function (head) {
  let s = head; // 每次走一步
  let f = head; // 每次走两步
  while (s && f && f.next) {
    s = s.next;
    f = f.next;
    if (s === f) return true;
  }

  return false;
};

// 指针，简洁版
const hasCycle_v3 = function (head) {
  let s = head; // 每次走一步
  let f = head; // 每次走两步
  while (f && f.next) {
    s = s.next;
    f = f.next.next;
    if (s === f) return true;
  }

  return false;
};
