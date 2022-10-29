function getFiniteNumbers(arr) {
  return arr.filter(el => {
    return Number.isFinite(el);
  });
}

const arr = [8, 9, 5.63, Infinity, 1.4, undefined, NaN, 'text', null];
console.log(getFiniteNumbers(arr));

function getFiniteNumbersV2(arr) {
  return arr.filter(el => {
    return isFinite(el);
  });
}

console.log(getFiniteNumbersV2(arr));

function getNaN(arr) {
  return arr.filter(el => {
    return Number.isNaN(el);
  });
}

console.log(getNaN(arr));

function getNaNV2(arr) {
  return arr.filter(el => {
    return isNaN(el);
  });
}

console.log(getNaNV2(arr));

function getIntegers(arr) {
  return arr.filter(el => {
    return Number.isInteger(el);
  });
}

console.log(getIntegers(arr));
