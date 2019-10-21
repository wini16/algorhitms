function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i) % 10);
}

function digitCount(num) {
  return num.toString().length;
}

function mostDigits(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count = Math.max(count, digitCount(arr[i]));
  }

  return count;
}

function radixSort(arr) {
  const digits = mostDigits(arr);

  for (let i = 0; i < digits; i++) {
    const buckets = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < arr.length; j++) {
      const num = arr[j];
      const digit = getDigit(num, i);
      buckets[digit].push(num);
    }

    arr = [].concat(...buckets);
  }

  return arr;
}

console.log(radixSort([1, 22, 333, 4444, 2]));