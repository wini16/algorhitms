class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  push(val) {
    const node = new Node(val);

    if (!this._head) {
      this._head = node;
      this._tail = node;
    } else {
      this._tail.next = node;
      this._tail = node;
    }

    this._length++;
    return this;
  }

  pop() {
    if (!this._length) {
      return null;
    }

    let prev = null;
    let current = this._head;

    while (current.next) {
      prev = current;
      current = current.next;
    }

    if (!prev) {
      this._head = prev;
    }

    this._tail = prev;
    this._tail.next = null;
    this._length--;

    return prev;
  }

  shift() {
    if (!this._length) {
      return null;
    }

    const prevHead = this._head;
    this._head = prevHead.next;

    prevHead.next = null;
    this._length--;

    return prevHead;
  }

  unshift(val) {
    const node = new Node(val);
    if (!this._head) {
      this._tail = node;
    }
    node.next = this._head;
    this._head = node;
    this._length++;

    return this;
  }
}

const list = new SinglyLinkedList();

list.push(11);
list.pop();
