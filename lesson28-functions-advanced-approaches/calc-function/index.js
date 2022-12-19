const calc = initValue => {
  let result = initValue;
  const calculator = {
    add(number) {
      result += number;
      return this;
    },
    mult(number) {
      result *= number;
      return this;
    },
    div(number) {
      result /= number;
      return this;
    },
    substract(number) {
      result -= number;
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
