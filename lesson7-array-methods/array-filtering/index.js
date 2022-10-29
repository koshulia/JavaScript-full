const getSpecialNumbers = arr => {
  return arr.filter(el => el % 3 === 0);
};

console.log(getSpecialNumbers([1, 5, 8, 4, 7, 9, 3, 15]));
