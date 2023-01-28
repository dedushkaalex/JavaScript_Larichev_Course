/* Итерирование по объектам */

const cities = {
  msk: {
    let: 200,
    temp: 25
  },
  spb: {
    lt: 100,
    temp: 20
  }
};

/*
  Для итерированию по объекту используем for..in, для for..of будет ошибка.
  Но если хотите итерироваться через for..of, то в связке с Object.keys/values/entries
*/
let sumTemp = 0;
let citiesCount = Object.keys(cities).length;
for (const key in cities) {
  console.log(key);
  sumTemp += cities[key].temp;

 }
 console.log(sumTemp / citiesCount);

 for (const key of Object.keys(cities)) {
  console.log(key);
 }