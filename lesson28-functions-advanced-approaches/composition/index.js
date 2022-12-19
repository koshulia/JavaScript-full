const add5 = value => value + 5;
const square = value => value * value;
const half = value => value / 2;

export const compose =
  (...funcs) =>
  value => {
    return funcs.reduce((acc, func) => func(acc), value);
  };

const doEverything = compose(add5, square, half);
console.log(doEverything(5));
