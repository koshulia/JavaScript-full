export default arr => {
  const res = arr.map(num => Math.abs(num * num));
  return Math.min.apply(Math, res);
};
