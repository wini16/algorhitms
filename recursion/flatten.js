function flatten(arr){
  const result = [];

  function helper(innerArr) {
    if (!innerArr.length) {
      return;
    }

    const el = innerArr[0];

    if (Array.isArray(el)) {
      helper(el);
    } else {
      result.push(el);
    }


    return helper(innerArr.slice(1));
  }

  helper(arr);

  return result;
}

console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3