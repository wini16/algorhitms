function calcParent(n) {
  return Math.floor((n - 1) / 2);
}

function calcLeftChild(n) {
  return n * 2 + 1;
}

function calcRightChild(n) {
  return n * 2 + 2;
}

function swap(arr, a, b) {
  return [arr[a], arr[b]] = [arr[b], arr[a]];
}

function sink(arr, i) {
  const length = arr.length;
  const currentEl = arr[i];
  const leftChildIndex = calcLeftChild(i);
  const rightChildIndex = calcRightChild(i);
  let swapIndex = null;
  let leftChild;
  let rightChild;

  if (leftChildIndex < length) {
    leftChild = arr[leftChildIndex];

    if (leftChild.priority < currentEl.priority) {
      swapIndex = leftChildIndex;
    }
  }

  if (rightChildIndex < length) {
    rightChild = arr[rightChildIndex];

    if (rightChild.priority < currentEl.priority && rightChild.priority < leftChild.priority) {
      swapIndex = rightChildIndex;
    }
  }

  if (!swapIndex) {
    return;
  }

  swap(arr, i, swapIndex);
  return sink(arr, swapIndex);
}

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }


  insert(value, priority) {
    const node = new Node(value, priority);
    this.values.push(node);

    let index = this.values.length - 1;
    let parentIndex = calcParent(index);

    while (index > 0 && this.values[index].priority < this.values[parentIndex].priority) {
      swap(this.values, index, parentIndex);
      index = parentIndex;
      parentIndex = calcParent(index);
    }
  }


  pop() {
    let index = 0;
    const min = this.values[index];
    let element = this.values.pop();

    if (!this.values.length) {
      return min;
    }

    this.values[index] = element;
    sink(this.values, index);

    return min;
  }
}

const queue = new PriorityQueue();

queue.insert(1, 5);
queue.insert(2, 5);
queue.insert(3, 4);
queue.insert(4, 4);
queue.insert(5, 3);
queue.insert(6, 3);
queue.insert(7, 2);
queue.insert(8, 2);
queue.insert(9, 1);
queue.insert(10, 1);
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());