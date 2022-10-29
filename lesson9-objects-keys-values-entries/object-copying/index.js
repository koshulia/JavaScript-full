function copyObj(obj) {
  return { ...obj };
}

const users = {
  'John Doe': 19,
  Tom: 17,
  Bob: 18,
};

console.log(copyObj(users));
