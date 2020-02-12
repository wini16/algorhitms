class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    }

    if (this.tail) {
      this.tail.next = newNode;
    }
    
    this.tail = newNode;
    this.length++;
    return this.length;
  }

  dequeue() {
    if (!this.length) {
      return null;
    }

    const prev = this.head;
    this.head = prev.next;
    prev.next = null;
    this.length--;

    return prev.value;
  }
}