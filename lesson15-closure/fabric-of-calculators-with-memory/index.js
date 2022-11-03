export function createCalculator() {
  let result = 0;

  function add(num) {
    result += num;
  }

  function decrease(num) {
    result -= num;
  }

  function reset() {
    result = 0;
  }

  function getMemo() {
    return result;
  }
  return {
    add,
    decrease,
    reset,
    getMemo,
  };
}

const calculator1 = createCalculator();
calculator1.add(3);
calculator1.decrease(1);
console.log(calculator1.getMemo());

const calculator2 = createCalculator();
calculator2.add(8);
calculator2.decrease(4);
console.log(calculator2.getMemo());
