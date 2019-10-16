function binarySearch(arr, val){
  // add whatever parameters you deem necessary - good luck!
  let left = 0;
  let right = arr.length -  1;
  let pointer = Math.floor(left + right / 2);
  
  while (arr[pointer] !== val) {
    if (val > arr[pointer]) {
      left = pointer + 1;
    } else {
      right = pointer - 1;
    }

    if (left > right) {
      return -1;
    }
    
    pointer = Math.floor((left + right) / 2);
  }
  
  return pointer;
}

console.log(binarySearch([1,2,3,4,5], 6));