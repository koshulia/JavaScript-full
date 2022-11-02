import { reverseArray } from './index';

it('should return reversed array', () => {
  const result = reverseArray([9, 3, 8, 5, 4, 6, 7]);
  expect(result).toEqual([7, 6, 4, 5, 8, 3, 9]);
});

it('should return reversed array', () => {
  const result = reverseArray([-9, 3, 8, -5, 4, 6, 0.7]);
  expect(result).toEqual([0.7, 6, 4, -5, 8, 3, -9]);
});

it('should return reversed array', () => {
  const result = reverseArray(9, 3, 8, 5, 4, 6, 7);
  expect(result).toEqual(null);
});
