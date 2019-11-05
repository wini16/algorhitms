const assert = require('assert').strict;

function factorial(x){
  if (x < 0 ) return 0;
  if (x <= 1 ) return 1;
  return x * factorial(x-1);
}

function factorial(num) {
  if (num < 0) { 
    return 0;
  }
  if (num <= 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

assert.ok(factorial(1) === 1);
assert.ok(factorial(2) === 2);
assert.ok(factorial(4) === 24);
assert.ok(factorial(7) === 5040);