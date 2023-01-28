/* Функции высшего порядка - функции, которые принимают другие функции или возвращают */

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}

//Функция высшего порядка
// Также обычно функции, которые передаются в другие функции называют Callback функции
//func - callback функция
function calculate(a, b, func) {
  console.log(func.name); // вывод имени функции
  const res = func(a, b);
  return res;
}

console.log(calculate(3, 5, add));

function power(pow) {
  return function(num) {
    return num ** pow;
  };
}
const powerOfTwo = power(2)(5);
console.log(powerOfTwo);
const power1 = (pow) => (num) => num ** pow;
console.log(power1(2)(5));