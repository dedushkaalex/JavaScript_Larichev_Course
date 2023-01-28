const data = [1, 2, 3, 4, 5, 6];
const [one, two, ...others] = data;
//так работать не будет
// const [one, two, ...others, six] = data;
console.log(one, two);

///...peremennaya - rest оператор
console.log(others);

/*
Когда использовать?
- когда нужна деструктуризация


*/
