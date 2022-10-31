/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
  if (!head || !head.next) return head;

  const reversed = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return reversed;
};
// @lc code=end

// 迭代
const reverseList_v1 = function (head) {
  let prev = head;
  let curr = null;

  while (prev) {
    const node = prev;
    prev = prev.next;
    node.next = curr;
    curr = node;
  }

  return curr;
};

// 递归
const reverseList_v2 = function (head) {
  if (!head || !head.next) return head;

  const reversed = reverseList_v2(head.next);
  head.next.next = head;
  head.next = null;
  return reversed;
};
