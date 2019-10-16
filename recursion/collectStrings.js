function collectStrings(obj) {
  const result = [];

  function helper(o) {
    const values = Object.values(o);

    values.forEach(value => {
      if (typeof value === 'string') {
        return result.push(value);
      }

      if (Object.prototype.toString.call(value) === '[object Object]') {
        return helper(value);
      }
    });
  }

  helper(obj);

  return result;
}

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])