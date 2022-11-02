import getMinSquaredNumber from './getMinSquaredNumber';

it('should get min squared number', () => {
  const result = getMinSquaredNumber([4, 0.6, -8]);
  expect(result).toEqual(0.36);
});

it('should not be empty array', () => {
  const result = getMinSquaredNumber([]);
  expect(result).not.toEqual([]);
});

it('should be an array', () => {
  const result = getMinSquaredNumber(6, 4, 7);
  expect(result).not.toEqual(16);
});
