const arr = [2, 4, 4, 10];

/*===== find =====*/
//Находит первый встречающийся элемент, удовлетворяющий условию или undefined

// let elGT5;
// for(const el of arr) {
//   if (el > 5) {
//     elGT5 = el;
//     break;
//   }
// }

let elGT5 = arr.find(el => el > 5);
console.log(elGT5);

/*===== findIndex =====*/
//Находит первый встречающийся элемент, удовлетворяющий условию и возвращает его ИНДЕКС или -1
let elGT5Index = arr.findIndex(el => el > 5);
console.log(elGT5Index);


//find и findIndex в новом js редко используются ( есть метод some)