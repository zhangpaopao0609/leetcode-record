/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
const sortList = function (head) {
  const node = [];
  while (head) {
    node.push(head.val);
    head = head.next;
  }

  node.sort((a, b) => a - b);
  let p = new ListNode(-1);
  const r = p;
  for (let i = 0; i < node.length; i++) {
    p.next = new ListNode(node[i]);
    p = p.next;
  }

  return r.next;
};
// @lc code=end

// 肯定就是 归并排序 时间复杂度 O(NlogN)
// 递归版本的归并排序 空间复杂度 O(logN)
// 迭代版本的归并排序 空间复杂度 O(1)
const sortList_v1 = function (head) {};
