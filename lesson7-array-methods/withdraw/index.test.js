import { withdraw } from './index';

it("should find person's balance and subtract amount", () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(result).toEqual(37);
});

it("should find person's balance and subtract amount", () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
  expect(result).toEqual(-1);
});

it("should find person's balance and subtract amount", () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 100);
  expect(result).toEqual(1300);
});
