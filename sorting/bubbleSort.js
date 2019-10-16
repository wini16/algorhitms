function swap(arr, inx1, inx2) {
  [arr[inx1], arr[inx2]] = [arr[inx2], arr[inx1]];
  return arr;
}

function bubbleSort(arr) {
  let swapped;

  for (let i = arr.length; i > 0; i--) {
    swapped = false;

    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return arr;
}

console.log(bubbleSort([5, 6, 3, 1, 9, 8, 10]));