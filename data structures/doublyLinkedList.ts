class El {
  public prev: El | null;
  public next: El | null;

  constructor(public value: any) {
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  private _head: El | null;
  private _tail: El | null;
  private _length: number;

  constructor() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  push(val: any) {
    const newNode = new El(val);

    if (!this._head) {
      this._head = newNode;
    }

    if (this._tail) {
      this._tail.next = newNode;
      newNode.prev = this._tail;
    }

    this._tail = newNode;
    this._length++;
    return this;
  }

  pop() {
    if (!this._length) {
      return null;
    }

    const popped = <El>this._tail;
    this._tail = popped.prev;
    popped.prev = null;
    
    if (!this._tail) {
      this._head = null;
    } else {
      this._tail.next = null;
    }

    this._length--;
    return popped;
  }

  shift() {
    if (!this._length) {
      return null;
    }

    const removed = <El>this._head;
    this._head = <El>removed.next;
    
    if (this._length === 1) {
      this._tail = null;
    } else {
      this._head.prev = null;
    }
    
    removed.next = null;
    this._length--;
    return removed;
  }

  unshift(val: any) {
    const newNode = new El(val);

    if (this._length) {
      newNode.next = this._head;
      // @ts-ignore: Object is possibly null
      this._head.prev = newNode;
    } else {
      this._tail = newNode;
    }
    
    this._head = newNode;
    this._length++;
    return this;
  }

  get(index: number) {
    if (index < 0 || index >= this._length) {
      return null;
    }

    const half = Math.floor(this._length / 2);
    let i: number;
    let val: El;

    if (index <= half) {
      i = 0;
      val = <El>this._head;
      while (i !== index) {
        val = <El>val.next;
        i++;
      }
    } else {
      i = this._length - 1;
      val = <El>this._tail;
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
    if (index < 0 || index > this._length) {
      return null;
    }

    if (index === 0) {
      return this.unshift(val);
    }

    if (index === this._length) {
      return this.push(val);
    }

    const oldNode = this.get(index);

    if (oldNode) {
      const newNode = new El(val);
      newNode.prev = oldNode.prev;
      newNode.next = oldNode;
      oldNode.prev = newNode;

      if (newNode.prev) {
        newNode.prev.next = newNode;
      }

      this._length++;
      return this;
    }
  }
}

const list = new DoublyLinkedList();

list.push(0);
list.push(1);
list.push(2);
// list.push(3);
// list.push(4);
// list.push(5);
// list.push(6);
// list.push(7);
console.log(list.get(1));
list.insert(1, 'dupa');
console.log(list.get(1));