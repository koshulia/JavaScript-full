const getValueWithDelay = (value, delay) =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log(value);
      resolve(value);
    }, delay);
  });

const asyncNumber1 = getValueWithDelay(56, 1000);
const asyncNumber2 = getValueWithDelay(70, 2000);
const asyncNumber3 = getValueWithDelay(139, 3000);
const asyncNumber4 = getValueWithDelay(undefined, 3000);
const asyncNumber5 = getValueWithDelay('jou', 3000);

const getSum = numbers =>
  numbers.filter(value => !isNaN(value)).reduce((num, acc) => acc + Number(num), 0);

export const asyncSum = (...asyncNumbers) =>
  Promise.all(asyncNumbers)
    .then(numbers => getSum(numbers))
    .catch(() => Promise.reject(new Error('Can`t calculate')));

asyncSum(asyncNumber1, asyncNumber2, asyncNumber3, asyncNumber4, asyncNumber5).then(result =>
  console.log(result),
);
