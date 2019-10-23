function minSubArrayLen(arr, target) {
  const length = arr.length;
  if (!length) {
    return 0;
  }

  let start = 0;
  let end = 0;
  let sum = 0;
  let len = Infinity;

  while (sum < target) {
    if (end === length) {
      return 0;
    }

    sum += arr[end];
    end++;
    len++;
  }

  while (end < length) {
    sum += arr[end];
    end++;

    while (sum > target) {
      start++;
      sum -= arr[start];
      len = Math.min(len, end - start);
    }
  }

  return len;
}

minSubArrayLen([2,3,1,2,4,3], 7); // 2
minSubArrayLen([2,1,6,5,4], 9); // 2
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52); // 1
minSubArrayLen([1,4,16,22,5,7,8,9,10], 39); // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10], 55); // 5
minSubArrayLen([4,3,3,8,1,2,3], 11); // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10], 95); // 0