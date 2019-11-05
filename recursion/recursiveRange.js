function recursiveRange(num){
  if (num === 0) {
    return num;
  }

  return num + recursiveRange(num - 1);
}

// SAMPLE INPUT/OUTPUT
console.log(recursiveRange(6)) // 21
console.log(recursiveRange(10)) // 55