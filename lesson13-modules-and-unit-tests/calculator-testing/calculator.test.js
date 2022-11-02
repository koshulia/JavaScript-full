import { calc } from './calculator';

it('should calculate the sum of numbers', () => {
  const result = calc('3 + 6');
  expect(result).toEqual('3 + 6 = 9');
});

it('should calculate the difference of numbers', () => {
  const result = calc('6 - 3');
  expect(result).toEqual('6 - 3 = 3');
});

it('should calculate the multiplication of numbers', () => {
  const result = calc('3 * 6');
  expect(result).toEqual('3 * 6 = 18');
});

it('should calculate the division of numbers', () => {
  const result = calc('6 / 3');
  expect(result).toEqual('6 / 3 = 2');
});

it('should be null', () => {
  const result = calc(3 + 6);
  expect(result).toEqual(null);
});
