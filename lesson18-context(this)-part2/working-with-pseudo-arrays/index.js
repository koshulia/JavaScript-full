export function sumOfSquares() {
  return [...arguments].reduce((acc, el) => {
    return acc + el ** 2;
  }, 0);
}

console.log(sumOfSquares(5, 7, 3, 8, 1));
