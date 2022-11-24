/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
// 第一种做法肯定是 hash 表，然后重新链接
const reverseKGroup = function (head, k) {
  let p = head;
  let beforeNode = new ListNode(-1);
  let dummyHead = beforeNode;

  while (p) {
    let flag = true;
    for (let i = 0; i < k; i++) {
      if (!p) {
        // 说明不足翻转
        flag = false;
      } else {
        p = p.next;
      }
    }

    if (flag) {
      // 可以翻转
      let curr = null;
      let first = null;
      for (let i = 0; i < k; i++) {
        if (i === 0) first = head;
        const temp = head.next;
        head.next = curr;
        curr = head;
        head = temp;
      }
      beforeNode.next = curr;
      beforeNode = first;
    } else {
      beforeNode.next = head;
    }
  }

  return dummyHead.next;
};
// @lc code=end

const reverseKGroup_v1 = function (head, k) {
  let p = head;
  let beforeNode = new ListNode(-1);
  let dummyHead = beforeNode;

  while (p) {
    let flag = true;
    for (let i = 0; i < k; i++) {
      p = p.next;
      if (!p) flag = false; // 说明不足翻转
    }

    if (flag) {
      // 可以翻转
      let curr = null;
      for (let i = 0; i < k - 1; i++) {
        const temp = head.next;
        head.next = curr;
        curr = head;
        head = temp;
      }
      beforeNode.next = curr;
    } else {
      // 直接链接
      beforeNode.next = head;
    }
    beforeNode = head.next;
  }

  return dummyHead.next;
};

// 第一种做法肯定是 hash 表，然后重新链接
const reverseKGroup_v2 = function (head, k) {
  const node = [];
  let p = head;
  while (p) {
    const t = p.next;
    p.next = null;
    node.push(p);
    p = t;
  }

  let r = new ListNode(-1);
  const dummyHead = r;
  for (let i = 0; i < node.length; ) {
    const start = i;
    let end = i + k - 1;
    if (end >= node.length) {
      r.next = node[i];
      r = r.next;
      i++;
    } else {
      while (start <= end) {
        r.next = node[end];
        r = r.next;
        end--;
        i++;
      }
    }
  }

  return dummyHead.next;
};
