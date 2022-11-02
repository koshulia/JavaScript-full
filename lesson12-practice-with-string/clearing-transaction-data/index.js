//1. проитерироваться по массиву
//2. отбросить элементы, которые содержат буквы
//3. обрезать пробелы
//4. округлить числа до двух знаков после точки
//5. добавить значок доллара к числу

function cleanTransactionsList(transactionsList) {
  return transactionsList
    .map(el => Number(el).toFixed(2))
    .filter(el => !isNaN(el))
    .map(el => '$' + el);
}

console.log(cleanTransactionsList(['  1.9 ', '16.4', 17, ' 1 dollar ']));
