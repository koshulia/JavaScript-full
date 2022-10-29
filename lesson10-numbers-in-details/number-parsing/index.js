function getParsedIntegers(arr) {
  return arr.map(el => {
    return Number.parseInt(el);
  });
}

const arr = ['8.8text', 'text5', '5.7text', 'text', 1, 6.8];
console.log(getParsedIntegers(arr));

function getParsedIntegersV2(arr) {
  return arr.map(el => {
    return parseInt(el);
  });
}

console.log(getParsedIntegersV2(arr));

function getParsedFloats(arr) {
  return arr.map(el => {
    return Number.parseFloat(el);
  });
}

console.log(getParsedFloats(arr));

function getParsedFloatsV2(arr) {
  return arr.map(el => {
    return parseFloat(el);
  });
}

console.log(getParsedFloatsV2(arr));
