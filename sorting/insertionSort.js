function swap(arr, inx1, inx2) {
  [arr[inx1], arr[inx2]] = [arr[inx2], arr[inx1]];
  return arr;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currVal = arr[i];
    let j;

    for (j = i - 1; j >= 0 && currVal < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = currVal;
  }

  return arr;
}

console.log(insertionSort([5, 1, 3, 2, 0]));