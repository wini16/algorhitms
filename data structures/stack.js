class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  pop() {
    if (!this.length) {
      return null;
    }

    const prev = this.head;
    this.head = prev.next;
    prev.next = null;
    this.length--;

    return prev;
  }

  push(val) {
    const node = new Node(val);

    if (!this.head) {
      this.tail = node;
    }

    node.next = this.head;
    this.head = node;
    this.length++;

    return this.length;
  }
}