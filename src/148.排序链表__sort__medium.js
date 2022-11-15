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
  // 迭代版本主要在于手动地去拆分节点，将节点按照 1 2 4 8 .. 直到最后的长度
  const merge = function (head1, head2) {
    let p = new ListNode(-1);
    const dummyHead = p;

    while (head1 || head2) {
      if (!head1) {
        p.next = head2;
        p = p.next;
        head2 = head2.next;
        continue;
      }
      if (!head2) {
        p.next = head1;
        p = p.next;
        head1 = head1.next;
        continue;
      }
      if (head1.val <= head2.val) {
        p.next = head1;
        head1 = head1.next;
      } else {
        p.next = head2;
        head2 = head2.next;
      }
      p = p.next;
    }

    return dummyHead.next;
  };

  let length = 0;
  let p = head;
  while (p) {
    length++;
    p = p.next;
  }

  for (let subLength = 1; subLength < length; subLength <<= 1) {
    let p = new ListNode(-1);
    const dummyHead = p;
    let curr = head;

    while (curr) {
      let head1 = curr;
      for (let j = 1; j < subLength && curr; j++) {
        curr = curr.next;
      }
      if (!curr) {
        p.next = head1;
        continue;
      }
      // 此时，curr 已经走到 head1 的最后一个结点
      let head2 = curr.next; // head2 开始
      curr.next = null; // head1 的最后一个结点 next 指向空，截断
      curr = head2;
      for (let j = 1; j < subLength && curr; j++) {
        curr = curr.next;
      }
      // 此时，curr 已经走到 head2 的最后一个结点
      let temp = null;
      if (curr) {
        temp = curr.next; // 得到 curr 的下一个结点
        curr.next = null; // head2 的最后一个结点 next 指向空，截断
        curr = temp; // curr 指向下一个结点
      }

      // 归并 head1 和 head2
      const sorted = merge(head1, head2);
      // 重新链接
      p.next = sorted;
      while (p.next) {
        p = p.next;
      }
    }

    head = dummyHead.next;
  }

  return head;
};
// @lc code=end

// 肯定就是 归并排序 时间复杂度 O(NlogN)
// 递归版本的归并排序 空间复杂度 O(logN)
// 迭代版本的归并排序 空间复杂度 O(1)
const sortList_v1 = function (head) {
  const merge = function (head1, head2) {
    let p = new ListNode(-1);
    const dummyHead = p;

    while (head1 || head2) {
      if (!head1) {
        p.next = head2;
        p = p.next;
        head2 = head2.next;
        continue;
      }
      if (!head2) {
        p.next = head1;
        p = p.next;
        head1 = head1.next;
        continue;
      }
      if (head1.val <= head2.val) {
        p.next = head1;
        head1 = head1.next;
      } else {
        p.next = head2;
        head2 = head2.next;
      }
      p = p.next;
    }

    return dummyHead.next;
  };

  // 归并排序是 数组 左 右，这里直接链表头和尾即可
  const sort = function (head, tail) {
    // 左闭右开
    if (!head) return head; // 为空
    if (head.next == tail) {
      // 只有一个节点的时候
      head.next = null;
      return head;
    }

    let slow = head;
    let fast = head;

    while (fast != tail) {
      slow = slow.next;
      fast = fast.next;
      if (fast != tail) {
        fast = fast.next;
      }
    }
    // 执行到这里时，slow 就是 head 到 tail 的中点了
    const left = sort(head, slow);
    const right = sort(slow, tail);
    return merge(left, right);
  };

  return sort(head, null);
};

// 递归版本的归并排序 空间复杂度 O(logN)
// 迭代版本的归并排序 空间复杂度 O(1)
const sortList_v2 = function (head) {
  // 迭代版本主要在于手动地去拆分节点，将节点按照 1 2 4 8 .. 直到最后的长度
  const merge = function (head1, head2) {
    let p = new ListNode(-1);
    const dummyHead = p;

    while (head1 || head2) {
      if (!head1) {
        p.next = head2;
        p = p.next;
        head2 = head2.next;
        continue;
      }
      if (!head2) {
        p.next = head1;
        p = p.next;
        head1 = head1.next;
        continue;
      }
      if (head1.val <= head2.val) {
        p.next = head1;
        head1 = head1.next;
      } else {
        p.next = head2;
        head2 = head2.next;
      }
      p = p.next;
    }

    return dummyHead.next;
  };

  let length = 0;
  let p = head;
  while (p) {
    length++;
    p = p.next;
  }

  for (let subLength = 1; subLength < length; subLength <<= 1) {
    let p = new ListNode(-1);
    const dummyHead = p;
    let curr = head;

    while (curr) {
      let head1 = curr;
      for (let j = 1; j < subLength && curr; j++) {
        curr = curr.next;
      }
      if (!curr) {
        p.next = head1;
        continue;
      }
      // 此时，curr 已经走到 head1 的最后一个结点
      let head2 = curr.next; // head2 开始
      curr.next = null; // head1 的最后一个结点 next 指向空，截断
      curr = head2;
      for (let j = 1; j < subLength && curr; j++) {
        curr = curr.next;
      }
      // 此时，curr 已经走到 head2 的最后一个结点
      let temp = null;
      if (curr) {
        temp = curr.next; // 得到 curr 的下一个结点
        curr.next = null; // head2 的最后一个结点 next 指向空，截断
        curr = temp; // curr 指向下一个结点
      }

      // 归并 head1 和 head2
      const sorted = merge(head1, head2);
      // 重新链接
      p.next = sorted;
      while (p.next) {
        p = p.next;
      }
    }

    head = dummyHead.next;
  }

  return head;
};
