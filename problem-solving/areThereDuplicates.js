function areThereDuplicates(...args) {
  // good luck. (supply any arguments you deem necessary.)
  const counter = {};

  for (let i = 0; i < args.length; i++) {
    const el = array[i];
    if (counter[el]) {
      return true;
    }
    counter[el] = 1;
  }

  return false;
}

areThereDuplicates(1, 2, 3);
areThereDuplicates(1, 2, 2);
areThereDuplicates('a', 'b', 'c', 'a');