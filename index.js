// /* cast to string */
// console.log('17 to string is ' + String(17));
// console.log('-17.17 to string is ' + String(-17.17));
// console.log('false to string is ' + String(false));
// console.log('null to string is ' + String(null));
// console.log('undefined to string is ' + String(undefined));
// console.log('0 to string is ' + String(0));

// /* cast to number */
// console.log("'17' to number is " + Number('17'));
// console.log('true to number is ' + Number(true));
// console.log('false to number is ' + Number(false));
// console.log('null to number is ' + Number(null));
// console.log('undefined to number is ' + Number(undefined));
// console.log("'   20   ' to number is " + Number('   20   '));
// console.log("'      ' to number is " + Number('      '));
// console.log("'   30d   ' to number is " + Number('   30d   '));

// /* cast to boolean */
// console.log('null to boolean is ' + Boolean(null));
// console.log('undefined to boolean is ' + Boolean(undefined));
// console.log('0 to boolean is ' + Boolean(0));
// console.log('-0 to boolean is ' + Boolean(-0));
// console.log('NaN to boolean is ' + Boolean(NaN));
// console.log("'' to boolean is " + Boolean(''));
// console.log("' ' to boolean is " + Boolean(' '));
// console.log('17 to boolean is ' + Boolean(17));
// console.log("'Hello' to boolean is " + Boolean('Hello'));

// /* Результатом сравнения является булевое значение */

// /* Сравнение чисел */
// const a = 17;
// const b = 5;
// a > b;
// a <= b;
// a == b;
// a != b;

// console.log('a > b:', a > b);
// console.log('a <= b:', a <= b);
// console.log('a == b:', a == b);
// console.log('a != b:', a != b);

// /* Сравнение строк */
// 'a' < 'b';
// 'ab' > 'a';

// console.log("'a' < 'b':", 'a' < 'b');
// console.log("'ab' > 'a':", 'ab' > 'a');

// /* При сравнении переменных разных типов они преобразуются в числа */
// '17' > 1;

// console.log("'17' > 1:", '17' > 1);

// /* Строгое сравнение */
// 17 === 1;
// 17 === 17;
// 17 === '17';
// 17 === true;
// '0' === '';
// true === false;
// true === true;
// null === undefined;
// false === 0;

// console.log('17 === 1:', 17 === 1);
// console.log('17 === 17;', 17 === 17);
// console.log("17 === '17':", 17 === '17');
// console.log('17 === true:', 17 === true);
// console.log("'0' === '':", '0' === '');
// console.log('true === false:', true === false);
// console.log('true === true:', true === true);
// console.log('null === undefined:', null === undefined);
// console.log('false === 0:', false === 0);

// /* Нестрогое сравнение */
// 17 == '17';
// '0' == '';
// 0 == '';
// null == undefined;
// false == 0;

// console.log("17 == '17':", 17 == '17');
// console.log("'0' == '':", '0' == '');
// console.log("0 == '':", 0 == '');
// console.log('null == undefined:', null == undefined);
// console.log('false == 0:', false == 0);

// /* Осторожно c null и undefined */
// undefined == null;
// undefined == 0;
// null == 0;
// undefined < 0;
// undefined > 0;

// console.log('undefined == null:', undefined == null);
// console.log('undefined == 0:', undefined == 0);
// console.log('null == 0:', null == 0);
// console.log('undefined < 0:', undefined < 0);
// console.log('undefined > 0:', undefined > 0);

// /* оператор || (OR) */
// false || true;
// false || true || false;
// false || false || false;

// console.log('false || true:', false || true);
// console.log('false || true || false:', false || true || false);
// console.log('false || false || false:', false || false || false);

// /* оператор && (AND) */
// false && true;
// false && true && false;
// true && true && true;

// console.log('false && true:', false && true);
// console.log('false && true && false:', false && true && false);
// console.log('true && true && true:', true && true && true);

// /* Логические операторы могут применятся к любым типам данных */

// /* || находит первое истинное значение */
// 'text' || false;
// true || 'text';
// undefined || null || 0 || '' || null;

// const customAmount = null; // не выводим
// const defaultAmount = 17; // не выводим
// const amount = customAmount || defaultAmount; // выводим значение переменной amount в формате console.log('amount:', amount);

// console.log("'text' || false:", 'text' || false);
// console.log("true || 'text':", true || 'text');
// console.log(
//   "undefined || null || 0 || '' || null:",
//   undefined || null || 0 || '' || null
// );
// console.log('amount:', amount);

// /* && находит первое ложное значение */
// 'text' && false;
// true && 'text';
// undefined && null && 0 && '' && null;

// console.log("'text' && false:", 'text' && false);
// console.log("true && 'text':", true && 'text');
// console.log(
//   "undefined && null && 0 && '' && null:",
//   undefined && null && 0 && '' && null
// );

// /* оператор отрицания (OR) */
// !true;
// !false;
// !'text';
// !!'text';

// console.log('!true:', !true);
// console.log('!false:', !false);
// console.log("!'text':", !'text');
// console.log("!!'text':", !!'text');

// if (true) console.log("I'm in");

// if (false) {
//   console.log("I'm not in");
// }

// if ('text') {
//   console.log('Yes');
// }

// if (null) {
//   console.log('Yes');
// } else {
//   console.log('Else');
// }

// // create age variable here

// let age = 61;

// if (age < 16) {
//   console.log('Too young');
// } else if (age >= 16 && age < 18) {
//   console.log('Almost ready');
// } else if (age >= 18 && age < 65) {
//   console.log('Ready');
// } else {
//   console.log('Else');
// }

// // Тернаный оператор ? : ( const result = условие ? значение1 : значение2; )

// // create amount variable here

// let amount = 16;

// const result = amount > 17 ? 'full' : 'empty';

// console.log(result);

// /* Этот код менять не нужно */
// const defaultUserName = 'anonymus';
// const userName = 'John';
// const anotherUser = null;
// const isAdmin = false;
// const message = 'text';
// const anotherMessage = 'text as well';
// const isLoggedIn = Boolean(userName);

// /* Раскоментируй код ниже, используя правильные операторы после знака присваивания */

// const activeUser = anotherUser || defaultUserName;
// const hasAccess = isAdmin || isLoggedIn;
// const isTruthy = message < anotherMessage;
// const isFalsy = !isLoggedIn;
// const isNotTrue = typeof message === 'number';
// const isTrue = typeof message > 'boolean';

// console.log(activeUser);
// console.log(hasAccess);
// console.log(isTruthy);
// console.log(isFalsy);
// console.log(isNotTrue);
// console.log(isTrue);

// const n = 120;
// let m = 0;
// let sum = 0;

// while (m <= n) {
//   sum += m;
//   m++;
// }

// console.log('Result:' + sum);

// const n = 12;
// const m = 1;
// let result = 1;

// for (let i = m; i <= n; i++) {
//   if (i % 2 === 1) {
//     result *= i;
//   }
// }

// console.log(result);

// for (let i = 1; i <= 5; i++) {
//   console.log('=> ' + i + ' <=');
//   for (let n = 1; n <= 10; n++) {
//     console.log(i + ' x ' + n + ' = ' + i * n);
//   }
// }

// const n = 9;
// let result = '';

// for (let i = 1; i <= n; i++) {
//   result += i;
// }

// console.log(result);

// const start = 1;
// const end = 100;
// let result = 0;

// for (let i = start; i <= end; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   } else if (i % 2 === 0 && i % 4 != 0) {
//     result += i;
//   } else if (i % 3 === 0) {
//     result -= i;
//   } else if (i % 4 === 0) {
//     result *= i;
//   }
// }

// console.log(result);

// let sum = 0;

// for (let i = 0; i <= 1000; i++) {
//   if (i % 2 === 1) {
//     console.log('Found');
//     sum += i;
//   }
// }

// if ((sum *= 5) > 5000) {
//   console.log('Bigger');
// } else {
//   console.log('Smaller or equal');
// }

// let sum = 0;
// for (let i = 0; i <= 10000000; i++) {
//   sum += i;
// }

// console.log(sum);

// let sum = 0;
// for (let i = 1; i <= 1000; i++) {
//   sum += i;
// }

// let div = ~~(sum / 1234);
// let mod = sum % 1234;
// console.log(div > mod);
// console.log(~~(sum / 1234));
// console.log(sum % 1234);

// function sayHi(name) {
//   console.log('Hi, ' + name);
// }

// sayHi('Tom');

// function getEvenOdd(num) {
//   if (num % 2 === 0) {
//     return 'even';
//   } else {
//     return 'odd';
//   }
// }

// console.log(getEvenOdd(76));

// const square = (num) => num * num;

// console.log(square(9));

// function getSum(firstNumber, lastNumber) {
//   let result = 0;
//   for (let i = firstNumber; i <= lastNumber; i++) {
//     if (i % 2 === 0) {
//       result += i;
//     }
//   }
//   return result;
// }

// console.log(getSum(4, 78));

// function increaser(a, index) {
//   let res;
//   if (a > index) {
//     res = a + index;
//   } else {
//     return a;
//   }
//   return res;
// }

// console.log(increaser(3, 5));
// console.log(increaser(7, 5));

// function findDivCount(a, b, n) {
//   let res = 0;
//   for (let i = a; i <= b; i++) {
//     if (i % n === 0) {
//       res += 1;
//     }
//   }
//   return res;
// }

// console.log(findDivCount(3, 35, 3));

// function sum(from, to) {
//   let res = 0;
//   for (let i = from; i <= to; i++) {
//     res += i;
//   }
//   return res;
// }

// function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
//   const result = sum(firstFrom, firstTo) > sum(secondFrom, secondTo);
//   return result;
// }

// // examples
// console.log(sum(5, 10)); // ===> 45
// console.log(sum(11, 11)); // ===> 11

// console.log(compareSums(5, 10, 5, 10)); // ===> false
// console.log(compareSums(5, 15, 3, 5)); // ===> true
// console.log(compareSums(-2, 5, 5, 9)); // ===> false

// function getPrimes(num) {
//   nextPrime: for (let i = 2; i <= num; i++) {
//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) continue nextPrime;
//     }
//     console.log(i);
//   }
// }

// getPrimes(9);

// function getArrayBounds(arr) {
//   if (!Array.isArray(arr)) return null;

//   return [arr.length, arr[0], arr[arr.length - 1]];
// }

// // examples
// console.log(getArrayBounds([1, 10, 9, 11])); // ==> [4, 1, 11]
// console.log(getArrayBounds(10, 12, 14)); // ==> null
// console.log(getArrayBounds([1])); // ==> [1, 1, 1]

// function getSum(arr) {
//   let resultSum = 0;
//   if (!Array.isArray(arr)) return null;
//   for (let num of arr) {
//     resultSum += num;
//   }
//   return resultSum;
// }

// // examples
// console.log(getSum([1, 10, -10, 4])); // ==> 5
// console.log(getSum([1])); // ==> 1
// console.log(getSum([-8, 8])); // ==> 0
// console.log(getSum(10, 12, 14)); // ==> null

// function getSpecialNumbers(from, to) {
//   let specialNumbers = [];
//   for (let i = from; i <= to; i++) {
//     if (i % 3 === 0) {
//       specialNumbers.push(i);
//     }
//   }
//   return specialNumbers;
// }

// // examples
// console.log(getSpecialNumbers(1, 10)); // ==> [3, 6, 9]
// console.log(getSpecialNumbers(-10, 10)); // ==> [-9, -6, -3, 0, 3, 6, 9]
// console.log(getSpecialNumbers(1, 2)); // ==> [ ]

// function swap(numbers) {
//   const [start, ...rest] = numbers;
//   return [...rest, start];
// }

// function swapManual(numbers) {
//   let resultSwapManual = numbers.slice([1]);
//   resultSwapManual.push(numbers[0]);
//   return resultSwapManual;
// }

// // examples
// console.log(swap([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
// console.log(swapManual([1, 10, 9, 11])); // ==> [10, 9, 11, 1]

// function createEmptyArray(len) {
//   let resultArray = new Array(len);
//   return resultArray;
// }

// console.log(createEmptyArray(5));

// function squareArray(arr) {
//   let getSquareArray = [];
//   if (!Array.isArray(arr)) return null;
//   for (let num of arr) {
//     getSquareArray.push(num * num);
//   }

//   return getSquareArray;
// }

// // examples
// console.log(squareArray([1, 10, 9, 11])); // ==> [1, 100, 81, 121]
// console.log(squareArray([10, 0, -4])); // ==> [100, 0, 16]
// console.log(squareArray([1])); // ==> [1]
// console.log(squareArray(2, 5));

// const checkSum = (arr) => {
//   let getCheckSum = 0;
//   if (!Array.isArray(arr)) return null;
//   for (let num of arr) {
//     getCheckSum += num;
//   }
//   return getCheckSum > 100;
// };

// // examples
// console.log(checkSum([10, 10, 10])); // ===> false
// console.log(checkSum([10, 99, 1])); // ===> true
// console.log(checkSum([-6, -3, 200])); // ===> true

// const increaseEvenEl = (arr, delta) => {
//   let getIncreaseEvenEl = [];
//   if (!Array.isArray(arr)) return null;
//   for (let num of arr) {
//     if (num % 2 === 0) {
//       num = num + delta;
//     }
//     getIncreaseEvenEl.push(num);
//   }
//   return getIncreaseEvenEl;
// };

// // examples
// console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20)); // ===> [22, 5, 26, 28, 11, 9, 24]
// console.log(increaseEvenEl([7, 11, 1], 10)); // ===> [7, 11, 1]
// console.log(increaseEvenEl([], 120)); // ===> []

// function reverseArray(arr) {
//   let getReverseArray = arr.slice();
//   if (!Array.isArray(arr)) return null;
//   getReverseArray.reverse();
//   return getReverseArray;
// }

// console.log(reverseArray([2, 8, 9, 7]));

// function cloneArr(arr) {
//   if (!Array.isArray(arr)) return null;
//   let getCloneArr = arr.slice();
//   return getCloneArr;
// }

// console.log(cloneArr([2, 8, 9, 7]));

// function checker(arr) {
//   if (!Array.isArray(arr)) return null;
//   let getMax = Math.max(...arr);
//   let getMin = Math.min(...arr);
//   let getSum = getMax + getMin;
//   return getSum > 1000;
// }
// console.log(checker([2, 8, 9, 7]));
// console.log(checker([670, 864, 568, 746]));

// let arr = [4, 32, 2, 5, 8];
// function sortAsc(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
// }
// console.log(sortAsc(arr));

// function sortAsc(array) {
//   if (!Array.isArray(array)) return null;
//   let done;
//   while (!done) {
//     done = true;
//     for (let i = 1; i < array.length; i++) {
//       if (array[i - 1] > array[i]) {
//         done = false;
//         let tmp = array[i - 1];
//         array[i - 1] = array[i];
//         array[i] = tmp;
//       }
//     }
//   }

//   return array;
// }

// console.log(sortAsc([12, 10, 15, 11, 14, 13, 16]));
// console.log(sortAsc([56, 9, 23, 98, 6, 1, 67]));
// console.log(sortAsc(12, 10, 15, 11, 14, 13, 16));

// function sortDesc(array) {
//   if (!Array.isArray(array)) return null;
//   let done;
//   while (!done) {
//     done = true;
//     for (let i = 1; i < array.length; i++) {
//       if (array[i - 1] > array[i]) {
//         done = false;
//         let tmp = array[i - 1];
//         array[i - 1] = array[i];
//         array[i] = tmp;
//       }
//     }
//   }

//   return array.reverse();
// }

// console.log(sortDesc([12, 10, 15, 11, 14, 13, 16]));
// console.log(sortDesc([56, 9, 23, 98, 6, 1, 67]));
// console.log(sortDesc(12, 10, 15, 11, 14, 13, 16));

// function withdraw(clients, balances, client, amount) {
//   let resAmount;
//   const getClient = client;

//   for (let i = 0; i < clients.length; i++) {
//     if (getClient === clients[i]) {
//       for (let j = 0; j < balances.length; j++) {
//         if (clients.indexOf[i] === balances.indexOf[j]) {
//           if (balances[i] < amount) return -1;
//           resAmount = balances[i] - amount;
//         }
//       }
//     }
//   }
//   return resAmount;
// }

// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));
// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 20));

// const getSubArray = (arr, numberOfElements) => {
//   let resultNumber = arr.length - (arr.length - numberOfElements);
//   let result = arr.slice(0, resultNumber);

//   return result;
// };

// console.log(getSubArray([11, 4, 8, 3], 2));
// console.log(getSubArray([1, 2, 3, 4, 5], 3));

// const includes = (arr, num) => {
//   for (let el of arr) {
//     if (el === num) return true;
//   }
//   return false;
// };

// // examples
// console.log(includes([1, 4, 8, 3], 3)); // ==> true
// console.log(includes([1, 4, 8, 3], 5)); // ==> false

// function removeDuplicates(array) {
//   let res = [];
//   if (!Array.isArray(array)) return null;
//   for (let number of array) {
//     if (res.includes(number)) continue;
//     res.push(number);
//   }
//   return res;
// }

// console.log(removeDuplicates([1, 20, 2, 5, 20, 5, 2, 1, 8]));
// console.log(removeDuplicates([2, 2, 2, 2, 2, 7]));
// console.log(removeDuplicates(1));

// function uniqueCount(arr) {
//   let getUniqueCount = 0;
//   let res = [];
//   if (!Array.isArray(arr)) return null;
//   for (let number of arr) {
//     if (res.includes(number)) continue;
//     res.push(number);
//   }
//   for (let num of res) {
//     getUniqueCount += 1;
//   }
//   return getUniqueCount;
// }

// console.log(uniqueCount([1, 20, 2, 5, 20, 5, 2, 1, 8]));
// console.log(uniqueCount([2, 2, 2, 2, 2, 7]));
// console.log(uniqueCount(1));
