/*=== reduce ===*/
// сворачивает массив в одно число
const operations = [100, -20, 7, -30, 50]

// let balance = 0;
// for (const operation of operations) {
//   balance += operation;
// }
// console.log(balance);

const finalBalance = operations.reduce((acc, operation, i) => {
  console.log(`Итерация: ${i}; acc: ${acc}, currValue: ${operation}`);
  return acc + operation;
}, 0);
console.log(finalBalance);

// 0: acc = 0, value = 100
// 1: acc = 100, value = -20

/* Найти среднее значение */
const arr = [2, 4, 4, 10];
const res = arr.reduce((acc, currValue, index, array) => {
  if (index === array.length - 1) {
    return (acc + currValue) / array.length;
  }
  return acc + currValue;
}, 0);
console.log(res);