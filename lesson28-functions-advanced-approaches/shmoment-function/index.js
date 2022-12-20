export const shmoment = initDate => {
  let result = new Date(initDate);

  const getMethodsNames = {
    years: 'getFullYear',
    months: 'getMonth',
    days: 'getDate',
    hours: 'getHours',
    minutes: 'getMinutes',
    seconds: 'getSeconds',
    milliseconds: 'getMilliseconds',
  };

  const setMethodsNames = {
    years: 'setFullYear',
    months: 'setMonth',
    days: 'setDate',
    hours: 'setHours',
    minutes: 'setMinutes',
    seconds: 'setSeconds',
    milliseconds: 'setMilliseconds',
  };

  const calculator = {
    add(unit, value) {
      const currentUnitValue = result[getMethodsNames[unit]]();
      result = new Date(result[setMethodsNames[unit]](currentUnitValue + value));
      return this;
    },

    subtract(unit, value) {
      const currentUnitValue = result[getMethodsNames[unit]]();
      result = new Date(result[setMethodsNames[unit]](currentUnitValue - value));

      return this;
    },

    result() {
      return new Date(result);
    },
  };
  return calculator;
};

const result = shmoment(new Date(2020, 0, 7, 17, 17, 17))
  .add('years', 5)
  .add('minutes', 1)
  .subtract('hours', 5)
  .result();
console.log(result);
