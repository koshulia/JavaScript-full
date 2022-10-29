function sum(arr) {
  if (!Array.isArray(arr)) return null;
  return arr.reduce((acc, el) => acc + el);
}

console.log(sum([1, 2, 3, 4]));
