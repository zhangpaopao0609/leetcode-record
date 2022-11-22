/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */

// 哈希表 + 双向链表

const DoubleLink = function (key, val, prev = null, next = null) {
  this.key = key;
  this.val = val;
  this.prev = prev;
  this.next = next;
};
const LRUCache = function (capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.mp = new Map();

  this.head = new DoubleLink(-1, -1);
  this.tail = new DoubleLink(-1, -1);
  this.head.next = this.tail;
  this.tail.prev = this.head;

  this.addToHead = function (node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  };

  this.removeNode = function (node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  };

  this.removeTail = function () {
    const tail = this.tail.prev;
    this.removeNode(tail);
    return tail;
  };
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.mp.has(key)) {
    return -1;
  }
  const node = this.mp.get(key);
  this.removeNode(node);
  this.addToHead(node);
  return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.mp.has(key)) {
    // 存在
    const node = this.mp.get(key);
    this.removeNode(node);
    this.addToHead(node);
    node.val = value;
  } else {
    // 不存在
    this.size++;
    const node = new DoubleLink(key, value);
    this.addToHead(node);
    this.mp.set(key, node);
    if (this.size > this.capacity) {
      // 超出容量

      const dNode = this.removeTail();
      this.mp.delete(dNode.key);
      this.size--;
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

// 上面的解法是标准解法
// js 中有一个简单的方法，map
// 因为 map 的顺序就是插入的顺序，所以可以使用这个特性来解
// put 如果存在，那么就删除后重新插入，如果不存在但未超容量，直接插入，如果不存在但超容量，删除 map 第一个
// 这里怎么删除第一个，很简单，[...map.keys()][0] 或者 map.keys().next().value      map.keys() 返回的是所有键的遍历器
// get 不存在，直接返回 -1， 存在，删除 map 中的，重新插入
// 因为顺序就是插入的顺序
