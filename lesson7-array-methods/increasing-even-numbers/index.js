function increaseEvenEl(arr, delta) {
  if (!Array.isArray(arr)) return null;
  return arr
    .filter(elem => elem % 2 === 0)
    .map(el => {
      return el + delta;
    }, []);
}

console.log(increaseEvenEl([2, 3, 4, 5, 6, 7, 8], 10));
