const roles = ['user', 'admin', 'manager'];

/*=====indexOf=====*/

//indexOf - если нашел, вернет индекс, под которым находится.
//если элементов несколько, то вернёт первое вхождение
const elIndex = roles.indexOf('admin');
console.log(elIndex);

//Если не нашел, то вернет -1
const elIndex2 = roles.indexOf('superuser');
console.log(elIndex2);

if (roles.indexOf('admin') >=0) {
  console.log('Доступ есть');
}
/*=================*/

//Отличие indexOf от includes в том, чтобы облегчить проверку нахождения элемента

/*=====includes=====*/
//includes - если нашел, вернет true
//если не нашел, вернет false
console.log(roles.includes('admin'));

if (roles.includes('admin')) {
  console.log('Доступ есть');
}

/*=================*/