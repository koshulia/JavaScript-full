const flatArray = arr =>
  arr.reduce((acc, elem) => {
    return acc.concat(elem).sort((a, b) => a - b);
  }, []);

const arr = [1, 7, 6, [8, 4, 3], 10, 2, 5];
console.log(flatArray(arr));
console.log(arr);
