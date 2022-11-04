/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
  const cHead = new ListNode(-1, head);
  let cn = n;
  let p = cHead;
  let q = cHead;

  while (cn !== 0 && p) {
    p = p.next;
    cn--;
  }
  // 此时，p 已经走到了第 n+1 个节点，q 还在第 1 个节点 （cHead）

  // p q 同时走
  while (p && p.next) {
    p = p.next;
    q = q.next;
  }

  q.next = q.next.next;
  return cHead.next;
};
// @lc code=end

// hashtable 或者 数组记录结点
const removeNthFromEnd_v1 = function (head, n) {
  let p = new ListNode(-1, head);
  let q = p;
  const node = [];
  while (p) {
    node.push(p);
    p = p.next;
  }
  const l = node.length;
  const nn = node[l - n - 1];
  if (nn && nn.next) {
    nn.next = nn.next.next;
  }
  return q.next;
};

// 双指针，一前一后  相距 n
const removeNthFromEnd_v2 = function (head, n) {
  const cHead = new ListNode(-1, head);
  let cn = n;
  let p = cHead;
  let q = cHead;

  while (cn !== 0 && p) {
    p = p.next;
    cn--;
  }
  // 此时，p 已经走到了第 n+1 个节点，q 还在第 1 个节点 （cHead）

  // p q 同时走
  while (p && p.next) {
    p = p.next;
    q = q.next;
  }

  q.next = q.next.next;
  return cHead.next;
};
