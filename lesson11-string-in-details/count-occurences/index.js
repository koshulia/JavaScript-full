const countOccurrences = (text, str) => {
  let quantity = 0;
  if (str === '') return null;
  text.split(' ').forEach(el => {
    if (el.includes(str)) quantity += 1;
    return quantity;
  });

  return quantity;
};

console.log(countOccurrences('text biiho hohoh text', 'text'));
console.log(countOccurrences('', 'text'));
console.log(countOccurrences('texthuhuhtext', ''));
