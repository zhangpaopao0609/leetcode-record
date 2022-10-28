/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function (list1, list2) {
  let l1 = list1;
  let l2 = list2;
  let p = (q = new ListNode(-1));
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      q.next = l1;
      l1 = l1.next;
    } else {
      q.next = l2;
      l2 = l2.next;
    }
    q = q.next;
  }

  while (l1) {
    q.next = l1;
    l1 = l1.next;
    q = q.next;
  }

  while (l2) {
    q.next = l2;
    l2 = l2.next;
    q = q.next;
  }

  return p.next;
};
// @lc code=end

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// 这就是归并操作
const mergeTwoLists_v1 = function (list1, list2) {
  let l1 = list1;
  let l2 = list2;
  let p = (q = new ListNode(-1));
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      q.next = l1;
      l1 = l1.next;
    } else {
      q.next = l2;
      l2 = l2.next;
    }
    q = q.next;
  }

  while (l1) {
    q.next = l1;
    l1 = l1.next;
    q = q.next;
  }

  while (l2) {
    q.next = l2;
    l2 = l2.next;
    q = q.next;
  }

  return p.next;
};
