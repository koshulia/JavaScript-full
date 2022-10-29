const splitText = (text, len) => {
  if (typeof text !== 'string') return null;
  if (len === undefined) len = 10;
  const strArr = [];
  let startPosition = 0;
  while (true) {
    const chunk = text.substr(startPosition, len);
    if (chunk.length === 0) break;
    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPosition += len;
  }
  return strArr.join('\n');
};

console.log(splitText('abcdefg', 4));
console.log(splitText(6986, 4));
console.log(splitText('abcdefg'));
