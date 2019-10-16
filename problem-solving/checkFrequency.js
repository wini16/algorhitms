function sameFrequency(numA, numB){
  // good luck. Add any arguments you deem necessary.
  const numAarr = [...numA.toString()];
  const numBarr = [...numB.toString()];

  if (numAarr.length !== numBarr.length) {
    return false;
  }
  
  const numAfreq = {};
  
  numAarr.forEach(letter => {
      numAfreq[letter] = (numAfreq[letter] || 0)  + 1;
  });
  
  for (let i = 0; i < numBarr.length; i++) {
      const letter = numBarr[i];
      if (!numAfreq[letter]) {
        console.log('false');
        return false;
      }
      numAfreq[letter] -= 1;
  }
  
  console.log('true');
  return true;
}

sameFrequency(182, 281);
sameFrequency(34, 14);
sameFrequency(3589578, 5879385);
sameFrequency(22, 222);