export function createArrayOfFunctions(number) {
  if (number === undefined) return [];
  if (typeof number !== 'number') return null;

  const arr = [];
  arr.length = number;
  for (let index = 0; index < arr.length; index += 1) {
    arr[index] = function () {
      return index;
    };
  }
  return arr;
}

console.log(createArrayOfFunctions(8)[5]());
console.log(createArrayOfFunctions(''));
console.log(createArrayOfFunctions());
