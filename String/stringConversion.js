const str = 'Вася aka Terminator а Пупкина';
console.log(str.includes('а'));

// начинается с... 
console.log(str.startsWith('В'));

// заканчивается на ...
console.log(str.endsWith('В'));

/*===== Преобразования строк =====*/

/*=== toLowerCase() ===*/
//в нижний регистр
console.log(str.toLowerCase());

/*=== toUpperCase() ===*/
//в верхний регистр
console.log(str.toUpperCase());

/*=== replace ===*/
// замена в строке
// не модифицирует исходную строку, а возвращают новую
// заменяет только первое вхождение
console.log(str.replace('В', 'Ф')); // Вася на Фася

/*=== replace + regexp ===*/
//Для замены во всей строке
console.log(str.replace(/а/g, 'и'));


/*=== replaceAll ===*/
// поддерживается не во всех браузерах
// замена в строке
// не модифицирует исходную строку, а возвращают новую
// заменяет все символы в строке
console.log(str.replaceAll('а', 'и'));

/*=== trim ===*/
//удаляеи пробелы вначале и в конце
const str2 = ' Вася Пупкин    \n';
console.log(str2.trim());
console.log(str2.trimStart());
console.log(str2.trimEnd());