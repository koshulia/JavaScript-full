/* eslint-disable no-restricted-syntax */

const pickProps = (obj, props) => {
  const resObj = {};

  for (let key in obj) {
    if (!props.includes(key)) continue;
    resObj[key] = obj[key];
  }
  return resObj;
};

// examples
console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c'])); // ==> { a: 1, c: 3 }
console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex'])); // ==> { a: 1, c: 3 }
