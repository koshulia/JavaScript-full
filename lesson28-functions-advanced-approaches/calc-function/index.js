export const calc = initValue => {
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

    subtract(number) {
      result -= number;
      return this;
    },

    result() {
      return result;
    },
  };
  return calculator;
};

const result = calc(5).add(3).mult(2).div(4).subtract(1).result();

console.log(result);

const result1 = calc(3).add(6).div(6).subtract(7).mult(4).result();

console.log(result1);
