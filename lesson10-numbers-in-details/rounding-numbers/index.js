const multiRound = num => {
  const result = [];
  result.push(Math.floor(num * 100) / 100);
  result.push(Math.trunc(num * 100) / 100);
  result.push(Math.ceil(num * 100) / 100);
  result.push(Math.round(num * 100) / 100);
  result.push(+num.toFixed(2));
  return result;
};

// examples
console.log(multiRound(11.12556)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
console.log(multiRound(6.112)); // ==> [6.11, 6.11, 6.12, 6.11, 6.11]
