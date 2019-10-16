function stringifyNumbers(obj) {
  const newObj = {};
  const entries = Object.entries(obj);

  entries.forEach(([key, value]) => {
    if (typeof value === 'number') {
      return newObj[key] = value.toString();
    } else if (Object.prototype.toString.call(value) === '[object Object]') {
      return newObj[key] = stringifyNumbers(value);
    } else {
      return newObj[key] = value;
    }
  });
  
  return newObj;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/