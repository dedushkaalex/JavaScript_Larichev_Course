/*
Написать функцию, которые возвращает true,
если элемент есть, и false, если нет.
*/
const arr = [2, 4, 4, 10, 20];
function some(elem,arr) {
  return arr.filter((val, index) => {
    return val === elem ? true : false;
  }).length > 0 ? true : false;
}
console.log(some(4, arr));

/*===== SOME =====*/
// ищет элемент в массиве. лучше его всегда использовать
console.log(arr.some(el => el === 2));
