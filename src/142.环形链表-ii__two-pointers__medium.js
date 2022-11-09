/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
const detectCycle = function (head) {
  if (!head) return null;
  let fast = head;
  let slow = head;
  while (true) {
    if (!fast || !fast.next) return null;
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) break;
  }
  fast = head;
  while (fast !== slow) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
};
// @lc code=end

// hash 表
// 空间复杂度 O(n)

// 双指针
// 这个题目实在太巧妙了
const detectCycle_v1 = function (head) {
  if (!head) return null;
  let fast = head;
  let slow = head;
  while (true) {
    if (!fast || !fast.next) return null;
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) break;
  }
  fast = head;
  while (fast !== slow) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
};
