class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

export class SinglyLinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this._head) {
      this._head = newNode;
    }

    if (this._tail) {
      this._tail.next = newNode;
    }
    
    this._tail = newNode;
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

    const prev = this._head;
    this._head = prev.next;
    prev.next = null;
    this._length--;

    return prev;
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

  get(index) {
    if (index < 0 || index >= this._length) {
      return null;
    }

    let el = this._head;
    let count = 0;
    while (count !== index) {
      el = el.next;
      count++;
    }

    return el;
  }

  set(index, val) {
    const el = this.get(index);
    if (!el) {
      return false;
    }
    el.value = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this._length) {
      return null;
    }

    if (index === 0) {
      return this.unshift(val);
    }

    if (index === this._length) {
      return this.push(val);
    }

    const node = new Node(val);
    const prev = this.get(index - 1);
    node.next = prev.next;
    prev.next = node;
    this._length++;

    return this;
  }

  remove(index) {
    if (index < 0 || index >= this._length) {
      return null;
    }

    if (index === 0) {
      return this.shift(index);
    }

    if (index === this._length - 1) {
      return this.pop(index);
    }

    const prev = this.get(index - 1);
    const removed = prev.next;
    prev.next = removed.next;
    this._length--;

    return removed;
  }

  reverse() {    
    let node = this._head;
    this._head = this._tail;
    this._tail = node;

    let next = null;
    let prev = null;

    while (node) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}
