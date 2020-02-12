function validAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }
  const lookup = {};

  [...string1].forEach(letter => {
    lookup[letter] = (lookup[letter] || 0) + 1;
  });

  for (let i = 0; i < string2.length; i++) {
    const letter = string2[i];
    
    if (!lookup[letter]) {
      return false;
    }

    lookup[letter] -= 1;
  }

  return true;
}

validAnagram('', '');
validAnagram('aaz', 'zza');
validAnagram('anagram', 'nagaram');
validAnagram('rat', 'car');
validAnagram('awesome', 'awesom');
validAnagram('qwerty', 'qeywrt');
validAnagram('texttwisttime', 'timetwisttext');