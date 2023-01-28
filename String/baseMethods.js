const userName = 'Вася Пупкина';

//побуквенное получение
console.log(userName[0]);
console.log(userName[1]);
console.log(userName.charAt(2));

console.log(userName.length);

// вернёт первое вхождение
console.log(userName.indexOf('у'));
console.log(userName.indexOf('ки'));

// вернёт последнее вхождение
console.log(userName.lastIndexOf('а'));

//есть ли подстрока
console.log(userName.includes('ки'));
console.log(userName.includes('4'));

//получить подстроку
console.log(userName.slice(5));
console.log(userName.slice(5, 8));

//ошибка с emodji
const userName2 = '👽Вася Пупкин';
// console.log(userName[0]);
// console.log(userName[1]);
// console.log(userName.charAt(2));
// console.log(userName2.length);

//isNan