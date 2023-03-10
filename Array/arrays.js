const role1 = 'admin';
const role2 = 'user';
const role3 = 'superuser';

const roles = ['admin', 'user', 'superuser'];
const userInfo = ['Аня', 25];
console.log(roles);

console.log(roles[0]);
console.log(roles.length);
console.log(roles[roles.length - 1]);

console.log(roles[0]);
console.log(roles.at(0)); // первый элемент массива
console.log(roles.at(-1)); // последний элемент массива
//asd
// Управление элементами массива
const users = ['Аня', 'Вика', 'Лена'];
console.log(users);
users[2] = 'Кристина';
console.log(users);

//добавить в конец
const arrLength = users.push('Надя'); // добавляет в конец, вернет длину массива
console.log(users);
console.log(arrLength);

//добавить в начало
users.unshift('Вася');
console.log(users);
//sd
//удаление элемента с конца
const el = users.pop(); // возвращает удаленный элемент
console.log(users);
console.log(el);

//удаление элемента с начала массива
const el2 = users.shift();
console.log(users);
console.log(el2);

