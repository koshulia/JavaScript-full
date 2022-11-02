import getMinSquaredNumber from './getMinSquaredNumber';

it('should get min squared number', () => {
  const result = getMinSquaredNumber([4, 0.6, -8]);
  expect(result).toEqual(0.36);
});
