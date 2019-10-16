function swap(arr, inx1, inx2) {
  [arr[inx1], arr[inx2]] = [arr[inx2], arr[inx1]];
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min !== i) {
      swap(arr, min, i);
    }
  }

  return arr;
}

console.log(selectionSort([3,1,78,54,23,5, -10,9,13]));