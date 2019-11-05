class El {
  public prev: El | null;
  public next: El | null;

  constructor(public value: any) {
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  public head: El | null;
  public tail: El | null;
  public length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val: any) {
    const newNode = new El(val);

    if (!this.head) {
      this.head = newNode;
    }

    if (this.tail) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (!this.length) {
      return null;
    }

    const popped = <El>this.tail;
    this.tail = popped.prev;
    popped.prev = null;
    
    if (!this.tail) {
      this.head = null;
    } else {
      this.tail.next = null;
    }

    this.length--;
    return popped;
  }

  shift() {
    if (!this.length) {
      return null;
    }

    const removed = <El>this.head;
    this.head = <El>removed.next;
    
    if (this.length === 1) {
      this.tail = null;
    } else {
      this.head.prev = null;
    }
    
    removed.next = null;
    this.length--;
    return removed;
  }

  unshift(val: any) {
    const newNode = new El(val);

    if (this.length) {
      newNode.next = this.head;
      this.head!.prev = newNode;
    } else {
      this.tail = newNode;
    }
    
    this.head = newNode;
    this.length++;
    return this;
  }

  get(index: number) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    const half = Math.floor(this.length / 2);
    let i: number;
    let val: El;

    if (index <= half) {
      i = 0;
      val = <El>this.head;
      while (i !== index) {
        val = <El>val.next;
        i++;
      }
    } else {
      i = this.length - 1;
      val = <El>this.tail;
      while (i !== index) {
        val = <El>val.prev;
        i--;
      }
    }

    return val;
  }

  set(index: number, val: any) {
    const node = this.get(index);
    if (node) {
      node.value = val;
      return true;
    }

    return false;
  }

  insert(index: number, val: any) {
    if (index < 0 || index > this.length) {
      return null;
    }

    if (index === 0) {
      return this.unshift(val);
    }

    if (index === this.length) {
      return this.push(val);
    }

    const newNode = new El(val);
    const oldNode = <El>this.get(index);
    const prev = <El>oldNode.prev;

    newNode.prev = prev;
    prev.next = newNode;

    newNode.next = oldNode;
    oldNode.prev = newNode;

    this.length++;
    return this;
  }

  remove(index: number) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    if (index === 0) {
      return this.shift();
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    const removed = <El>this.get(index);
    const prev = <El>removed.prev;
    const next = <El>removed.next;

    prev.next = next;
    next.prev = prev;

    removed.prev = null;
    removed.next = null;

    this.length--;
    return removed;
  }
}
