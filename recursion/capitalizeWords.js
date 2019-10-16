function capitalizeWords (arr) {
  if (!arr.length) {
    return [];
  }

  const first = arr[0];
  const capitalized = first.toUpperCase();

  return [capitalized, ...capitalizeWords(arr.slice(1))];
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']