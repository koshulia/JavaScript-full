const calc = initValue => {
  let result = initValue;
  const calculator = {
    add(value) {
      result += value;
      return this;
    },
    mult(value) {
      result *= value;
      return this;
    },
    div(value) {
      result /= value;
      return this;
    },
    substract(value) {
      result -= value;
      return this;
    },

    result() {
      return result;
    },
  };
  return calculator;
};

const result = calc(5).add(3).mult(2).div(4).substract(1).result();

console.log(result);
