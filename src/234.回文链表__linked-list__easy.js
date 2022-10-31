/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */

const isPalindrome = function (head) {
  if (head == null) return true;
  let h = head;

  const getEndOfHalfNode = (head) => {
    let f = head;
    let s = head;
    while (f.next !== null && f.next.next !== null) {
      f = f.next.next;
      s = s.next;
    }
    return s;
  };

  const reverseLink = function (link) {
    let curr = link;
    let reversed = null;
    while (curr) {
      const node = curr;
      curr = curr.next;
      node.next = reversed;
      reversed = node;
    }
    return reversed;
  };

  const endOfHalfNode = getEndOfHalfNode(head);

  // 此时 s 在一半的位置，f 在链表尾
  // 反转 s.next 到 f
  let reversedS = reverseLink(endOfHalfNode.next);
  let rs = reversedS;
  let result = true;
  while (result && rs) {
    if (h.val !== rs.val) result = false;
    h = h.next;
    rs = rs.next;
  }

  // 将反转的链表再反转，相当于恢复链表
  const rrs = reverseLink(reversedS);
  endOfHalfNode.next = rrs;
  return result;
};

// @lc code=end

// 时间 O(N), 空间 O(N)
const isPalindrome_v1 = function (head) {
  let p = head;
  const p_node = [];

  while (p) {
    p_node.push(p.val);
    p = p.next;
  }

  const l = p_node.length;

  for (let i = 0; i < l / 2; i++) {
    if (p_node[i] !== p_node[l - 1 - i]) {
      return false;
    }
  }

  return true;
};

// 双指针，
// 快慢指针 找出中间位置
// 反转链表 后一半链表
const reverseLink = function (link) {
  let curr = link;
  let reversed = null;
  while (curr) {
    const node = curr;
    curr = curr.next;
    node.next = reversed;
    reversed = node;
  }
  return reversed;
};

const getEndOfHalfNode = (head) => {
  let f = head;
  let s = head;
  while (f.next !== null && f.next.next !== null) {
    f = f.next.next;
    s = s.next;
  }
  return s;
};

const isPalindrome_v2 = function (head) {
  if (head == null) return true;
  let h = head;
  
  const endOfHalfNode = getEndOfHalfNode(head);

  // 此时 s 在一半的位置，f 在链表尾
  // 反转 s.next 到 f
  let reversedS = reverseLink(endOfHalfNode.next);
  let rs = reversedS;
  let result = true;
  while (result && rs) {
    if (h.val !== rs.val) result = false;
    h = h.next;
    rs = rs.next;
  }

  // 将反转的链表再反转，相当于恢复链表
  const rrs = reverseLink(reversedS);
  endOfHalfNode.next = rrs;
  return result;
};
