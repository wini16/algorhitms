function capitalizeFirst (arr) {
  if (!arr.length) {
    return [];
  }

  const first = arr[0];
  const capitalized = first.charAt(0).toUpperCase() + first.slice(1);

  return [capitalized, ...capitalizeFirst(arr.slice(1))];
}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
