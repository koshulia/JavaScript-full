/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

export const makePromise = value => {
  const p = new Promise(resolve => {
    resolve(value);
  });
  return p;
};

/*
 * пример использования
 */
makePromise(17).then(number => {
  console.log(number); // 17
});
