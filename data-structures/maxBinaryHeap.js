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

class MaxBinaryHeap {
  constructor() {
    this.values = [90,36,17,25,26,7,1,2,3,19];
  }


  insert(value) {
    this.values.push(value);

    let index = this.values.length - 1;
    let parentIndex = calcParent(index);

    while (index > 0 && this.values[index] > this.values[parentIndex]) {
      swap(this.values, index, parentIndex);
      index = parentIndex;
      parentIndex = calcParent(index);
    }
  }


  extractMax() {
    let index = 0;
    const max = this.values[index];
    let element = this.values.pop();

    if (!this.values.length) {
      return max;
    }

    this.values[index] = element;

    let leftChildIndex = calcLeftChild(index);
    let rightChildIndex = calcRightChild(index);
    let leftChild = this.values[leftChildIndex];
    let rightChild = this.values[rightChildIndex];

    while (leftChild > element || rightChild > element) {
      let swapIndex = leftChildIndex;
    
      if (rightChild > element && rightChild > leftChild) {
        swapIndex = rightChildIndex;
      }
      
      swap(this.values, index, swapIndex);
      index = swapIndex;
      leftChildIndex = calcLeftChild(index);
      rightChildIndex = calcRightChild(index);
      leftChild = this.values[leftChildIndex];
      rightChild = this.values[rightChildIndex];
    }

    return max;
  }
}

const heap = new MaxBinaryHeap();

heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
console.log(heap.values);