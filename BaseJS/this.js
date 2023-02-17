/*
  This - переменная, которая создается для каждого контекста исполнения.
  Она указывает на владельца этой функции.
  this не статичен и определяется только при вызове функции в зависимости от того, как она вызвана.
*/

/*
Как работает this?
-----Куда указывает
---------------||------------------------------------------||
 метод         || На объект этого метода                   ||
---------------||------------------------------------------||
function       || undefined                                ||
---------------||------------------------------------------||
arrow func     || this родительского score                 ||
---------------||------------------------------------------||
event listener || DOM элемент к которому он прикреплен     ||
-----------------------------------------------------------||
*/
/*
this динамически привязывается в момент вызова функции.
*/
'use strict';

// console.log(this); // == window в браузере

function addNum(num1, num2) {
  console.log(this); // undefined
  return num1 + num2;
}

const addNum2 = (num1, num2) =>  {
  console.log(this); // window
  return num1 + num2;
}
// addNum();
// addNum2();

const user = {
  name: 'Вася',
  surname: 'Пупкин',
  getFullName: function() {
    console.log(this); //obj user
    return this.name + ' ' + this.surname;
  }
};

user.getFullName();

const user2 = {
  name: 'Марина',
  surname: 'Катц'
};
user2.getFullName = user.getFullName;
user2.getFullName();

const getFullName = user2.getFullName;
// getFullName(); // ошибка

/*
Контекст в методах
*/

const user3 = {
  name: 'Вася',
  surname: 'Пупкин',
  age: 20,
  getUserInfo: function() {
    console.log(this); 
    console.log(`${this.name} ${this.surname}`);

    //функция не относится к объекту, поэтому this == undefined
    // function canDrink() {
    //   if (this.age >= 18) {
    //     console.log('Может уже пить')
    //   }else {
    //     console.log('не может пить')
    //   }
    // }
    // canDrink();


    //нет своего this. Берет его из лексического окружения (getUSerInfo)
    //поэтому this.age без ошибки
    const canDrink = () => {
      if (this.age >= 18) {
        console.log('Может уже пить')
      }else {
        console.log('не может пить')
      }
    };
    canDrink();

  },
  getUserArrow: () => {
    console.log(`${this.name} ${this.surname}`);
  }
};

user3.getUserInfo();
user3.getUserArrow(); //undefined undefined