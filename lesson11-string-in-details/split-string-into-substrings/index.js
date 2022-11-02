const splitString = (text, len = 10) => {
  if (typeof text !== 'string') return null;
  const strArr = [];
  let startPosition = 0;
  while (true) {
    const chunk = text.substr(startPosition, len);
    if (chunk.length === 0) break;
    if (chunk.length < len) {
      strArr.push(chunk.padEnd(len, '.'));
    } else {
      strArr.push(chunk);
    }

    startPosition += len;
  }

  return strArr;
};

console.log(splitString('abcd efgh', 4));
console.log(splitString(6986, 4));
console.log(splitString('abcdefgkjgkjb'));
console.log(splitString('abcdefghugoihdgsehjk', 6));
