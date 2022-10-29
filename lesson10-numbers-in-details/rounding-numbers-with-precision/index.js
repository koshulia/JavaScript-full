const superRound = (num, prec) => {
  const result = [];

  result.push(Math.floor(num * 10 ** prec) / 10 ** prec);
  result.push(Math.trunc(num * 10 ** prec) / 10 ** prec);
  result.push(Math.ceil(num * 10 ** prec) / 10 ** prec);
  result.push(Math.round(num * 10 ** prec) / 10 ** prec);
  result.push(+num.toFixed(prec));

  return result;
};

// examples
console.log(superRound(11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
console.log(superRound(6.11, 3)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
