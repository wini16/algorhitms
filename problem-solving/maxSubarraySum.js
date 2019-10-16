function maxSubarraySum(arr, num){
  if (arr.length < num) {
    return null;
  }

  let total = 0;

  for (let i = 0; i < num; i++) {
    const element = arr[i];
    total += element;
  }

  let currentTotal = total;
  let end = start + num;

  while (end < arr.length) {
    total = total - arr[end - num] + arr[end];
    currentTotal = Math.max(currentTotal, total);
    end++;
  }

  return currentTotal;
}

function maxSubarraySum(arr, num){
  if (arr.length < num) {
    return null;
  }

  let total = 0;

  for (let i=0; i<num; i++){
     total += arr[i];
  }

  let currentTotal = total;
  for (let i = num; i < arr.length; i++) {
     currentTotal += arr[i] - arr[i-num];
     total = Math.max(total, currentTotal);
  }
  return total;
}

maxSubarraySum([100,200,300,400], 2); // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4); // 39
maxSubarraySum([-3,4,0,-2,6,-1], 2); // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2); // 5
maxSubarraySum([2,3], 3); // null