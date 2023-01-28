const roles = ['user', 'admin', 'manager', 'superuser'];

/*=====slice=====*/
//slice не модифицирует исходный массив 
//Вырезает часть массива от индекса 2 и до конца
const res = roles.slice(2);
console.log(res);

//Вырезает часть массива от индекса 2 до 3, не включая 3
const res2 = roles.slice(2, 3);
console.log(res2);

//берет последний элемент массива
const res3 = roles.slice(-1);
console.log(res3);

const res4 = roles.slice(1, -1);
console.log(res4);


/*=====splice=====*/
//splice модифицирует исходный массив
//splice(index, длина элемента, которые нужно взять)

// const res5 = roles.splice(2);
// console.log(roles);
// console.log(res5);

//со 2 индекса удалить 2 элемента
// const res6 = roles.splice(2, 2);
// console.log(roles);
// console.log(res6);

//различия splice и slice
//slice(начальный индекс, конечный индекс не включая его)
//splice(index, длина элемента, которые нужно взять)

/*=====reverse=====*/
//переворачивает массив
//модифицирует исходный массив
roles.reverse();
console.log(roles);

/*=====concat=====*/
const newRoles = ['sysadmin', 'frontender'];
const res8 = roles.concat(newRoles);
console.log(res8);