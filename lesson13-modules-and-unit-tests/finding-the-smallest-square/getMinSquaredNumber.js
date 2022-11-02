export default arr => {
  if (!Array.isArray(arr) || arr === []) return null;
  const res = arr.map(num => Math.abs(num * num));
  return Math.min.apply(Math, res);
};
