function cloneArr(arr) {
  if (!Array.isArray(arr)) return null;
  return [...arr];
}

const arr = [4, 5, 6, 3, 7, 8, 1];
console.log(cloneArr(arr));
