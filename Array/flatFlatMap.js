/*===== flat =====*/
// Нужен для того, чтобы понизить вложенность массива

const prices = [[2, 4], [3, 4], [10, [20, 50]]];
const res = prices.flat(2); //2 - глубина для преобразования в плоский массив
console.log(res);

/*===== flatMap =====*/
// последовательное применение сначала MAP, затем FLAT
const res2 = prices.flatMap( item => item.concat([1]));
console.log(res2);