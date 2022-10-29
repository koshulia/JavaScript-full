const sortDesc = arr => {
  return arr.slice().sort((a, b) => b - a);
};

console.log(sortDesc([1, 5, 8, 4, 7, 9, 3, 15]));
