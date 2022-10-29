// 1. проверить есть ли на заданном промежутке целые числа
// 2. найти случайные числа на заданном промежутке
// 3. привести их к целым
// 4. положить их в массив

// const getRandomNumbers = (length, from, to) => {
//   if (from > to || Math.trunc(from) === Math.trunc(to)) return null;
//   const roundedFrom = Math.ceil(from);
//   const roundedTo = Math.floor(to);
//   return Array.from(Array(length))
//     .map(el => Math.random() * (roundedTo - roundedFrom) + roundedFrom)
//     .map(el => Math.round(el));
// };

const getRandomNumbers = (length, from, to) => {
  if (from > to || Math.trunc(from) === Math.trunc(to)) return null;
  const roundedFrom = Math.ceil(from);
  const roundedTo = Math.floor(to);
  return new Array(length)
    .fill()
    .map(() => Math.floor(Math.random() * (roundedTo - roundedFrom) + roundedFrom));
};

// examples
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 3, 2, 3, 2]
console.log(getRandomNumbers(3, 2.4, 4.5)); // ==> [4, 3, 4]
console.log(getRandomNumbers(3, 1.9, 2.5)); // ==> [2, 2, 2]

console.log(getRandomNumbers(7, 1.4, 1.9)); // ==> null
console.log(getRandomNumbers(7, 2.11, 2.9)); // ==> null
console.log(getRandomNumbers(1, 2.5, 0.9)); // ==> null
