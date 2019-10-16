function swap(arr, inx1, inx2) {
  if (inx1 === inx2) {
    return arr;
  }

  [arr[inx1], arr[inx2]] = [arr[inx2], arr[inx1]];

  return arr;
}

function pivot(arr, start = 0, end = arr.length) {
  const pivotEl = arr[start];
  let lessCount = start;

  for (let i = start + 1; i < end; i++) {
    const el = arr[i];

    if (el < pivotEl) {
      lessCount++;
      swap(arr, i, lessCount);
    }
  }

  swap(arr, start, lessCount);
  
  return lessCount;
}

function quickSort(arr, left = 0, right = arr.length) {
  if (left < right) {
    const idx = pivot(arr, left, right);
  
    quickSort(arr, left, idx - 1);
    quickSort(arr, idx + 1, right);
  }


  return arr;
}

console.log(quickSort([5, 2, 1, -3, 100, 8, 4, 7, 6, 3]));