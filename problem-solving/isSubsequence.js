function isSubsequence(str1, str2) {
  if (!str1) {
    return true;
  }

  let i = 0;
  for (let k = 0; k < str2.length; k++) {
    const el = str2[k];
    if (el === str1[i]) {
      i++;

      if (i === str1.length) {
        return true;
      }
    }
  }

  return false;
}

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false