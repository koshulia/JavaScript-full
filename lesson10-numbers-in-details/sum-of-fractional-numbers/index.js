function getTotalPrice(arr) {
  const price = arr.reduce((acc, num) => acc + num);
  const res = Math.floor(price * 100) / 100;
  return '$' + res;
}

const arr = [8, 9, 5.63, 1.4];
console.log(getTotalPrice(arr));
