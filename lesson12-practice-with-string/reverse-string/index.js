//1. разделить строку по буквам
//2. перевернуть полученный массив
//3. проверить является ли переданное значение строкой

function reverseString(str) {
  if (typeof str !== 'string') return null;
  let result = str.split('').reverse().join('');
  return result;
}

console.log(reverseString('helloworld'));
