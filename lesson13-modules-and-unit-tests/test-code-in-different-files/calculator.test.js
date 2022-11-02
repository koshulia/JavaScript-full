import getSum, { getSquaredNumbers, getOddNumbers } from './calculator';

it('should get squared numbers', () => {
  const result = getSquaredNumbers([4, 2, 3]);

  expect(result).toEqual([16, 4, 9]);
});

it('should keep odd numbers only', () => {
  const result = getOddNumbers([1, 2, 3, 4, 5]);

  expect(result).toEqual([1, 3, 5]);
});

it('should get sum of numbers', () => {
  const result = getSum(5, 2);

  expect(result).toEqual(7);
});
