function filterNames(arr, text) {
  return arr.filter(el => el.includes(text) && el.length > 5);
}

console.log(filterNames(['John', 'Oliviya', 'Emanuel', 'Vanya', 'Nastya'], 'ya'));
