const userData = ['Антон', 23, 'Москва'];

//плохо
// const userName = userData[0];
// const age = userData[1];
// const city = userData[2];

// console.log(userName, age, city);

// плохо
function getData(){
  return ['Тоха', 18, 'Питер'];
}
// const userName = getData()[0];
// const age = getData()[1];
// const city = getData()[2];

// хорошо. Деструктуризация
// const [userName, age, city] = getData();

// console.log(userName, age, city);

//выбрать определенные параметры
const [userName, _, city] = getData();

console.log(userName, city);