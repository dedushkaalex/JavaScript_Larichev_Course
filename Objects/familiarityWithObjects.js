const userArray = ['Вася', 'Пупкин', 24];
const user = {
  name: 'Вася',
  surname: 'Пупкин',
  age: 24,
  skills: ['JS', 'CSS', 'HTML'],
  999: 999
};

/* Обращение к свойствам объекта */

console.log(user);
console.log(user.name);
console.log(user.skills[0]);
console.log(user['skills'][2]);

/* Разница между обращением через ТОЧКУ и СКОБКИ */
/*
  Самая большая разница в том, что 

  ==== обращение через object[] доступно для расчетных свойств
  Пример:
*/
const user2 = {
  name: 'Алекс',
  surname: 'Народный',
  age: 24,
  skills: ['JS', 'CSS', 'HTML'],
  eduBasic: 'Школа 10',
  eduPro: 'МФТИ',
};

const levelEducation = 'Pro';
console.log(user2['edu' + levelEducation]); //МФТИ

