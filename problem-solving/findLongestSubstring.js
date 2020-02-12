function findLongestSubstring(str) {
  const length = str.length;
  if (!length) {
    return 0;
  }

  let start = 0;
  let end = 0;
  let len = end - start;
  let max = len;
  let letters = {};
  
  while (!letters[str[end]]) {
    letters[str[end]] = 1;
    end++;
    len = end - start;
    
    if (end === length) {
      return len;
    }
  }

  max = len;

  while (end < length) {
    while (str[end] && !letters[str[end]]) {
      letters[str[end]] = 1;
      end++;
      len = end - start;
      max = Math.max(max, len);
    }

    while (start < end && letters[str[start]] === letters[str[end]]) {
      letters[str[start]] = 0;
      start++;
    }
  }

  return max;
}

console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit')); // 6