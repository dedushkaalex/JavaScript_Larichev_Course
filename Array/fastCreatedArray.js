
const arr = new Array(1, 2, 3, 4, 5);
console.log(arr);

/*===== new Array =====*/
//Чаще всего его используют для создания пустого массива определенной длины
const arr2 = new Array(5);
console.log(arr2);
// далее его надо заполнить чем-то, иначе методами map и т д не сможем на нем использовать
//fill - метод для заполнения массива
arr2.fill(1, 0, 3);
arr2.fill(2, 3, 5);
console.log(arr2);

//({опции для создания}, mapFn для преобразования каждого элемента)
const array3 = Array.from({length: 5454888}, (cur, i) => i + 1);
console.log(array3);