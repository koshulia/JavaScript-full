export const mult = a => b => a * b;

export const twice = mult(2);

export const triple = mult(3);

const result = twice(6);
console.log(result);

const result1 = triple(6);
console.log(result1);
