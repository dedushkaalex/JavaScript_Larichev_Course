/*
Дан список задач
const tasks = ['Задача 1'];
Сделать функции:
- Добавление задачи в конец
- Удаление задачи по названию
- Перенос задачи в начало списка по названию
Всегда меняем исходный массив
 */
const tasks = ['Задача 1'];

function createTask(taskName, arr) {
  if (taskName != '' && taskName != ' ') {
    arr.push(taskName);
    console.log(`Задача ${taskName} успешно добавлена.`);
  }
  else {
    console.log(`Добавьте имя задачи`);
  }
}

function deleteTask(taskName, arr) {
  if (arr.indexOf(taskName) >= 0) {
    const _ = arr.indexOf(taskName);
    arr.splice(_, 1);
    console.log(`Задача ${taskName} удалена`);
    console.log(arr);
  }
  else {
    console.log(`Задача ${taskName} не найдена. Удаление невозможно`);
  }
}

function unshiftTask(taskName, arr) {
  if (arr.length === 1) {
    console.log('Перемещение невозможно. Список из одного элемента');
  }
  else {
    if (arr.indexOf(taskName) >= 0) {
      const _ = arr.indexOf(taskName);
      let spliceElem = arr.splice(_, 1)[0];
      arr.unshift(spliceElem);
      console.log(`Задача ${taskName} перемещена в начало списка.`);
      console.log(arr);
    }
    else {
      console.log(`Задача ${taskName} не найдена. Перемещение невозможно`);
    }
  }
}

// createTask('asd', tasks);
// console.log(tasks);
// deleteTask('Задача 1', tasks);
// createTask('asd2', tasks);
// createTask('asd3', tasks);
// unshiftTask('asd3', tasks);
// console.log(tasks);
// unshiftTask('1', tasks);

/*
Дан произвольный url -
' https://purpleschool.ru/course/javascript '
Нужно сделать функцию, которая выводит в консоль:
- Протокол (https)
- Доменное имя ( purpleschool.ru )
- Путь внутри сайта (/course/javascript)
*/
function checkHttpValidity(http) {
  if (!http.includes('http') || !http.includes('https')) return -1;
  if (http.includes('http') && !http.includes('https')) {
    return `Тип протокола: ${http.slice(0, 4)}`;
  }
  if (http.includes('https')) {
    return `Тип протокола: ${http.slice(0, 5)}`;
  }
}
function checkDomainValidity(domain) {
  const splitDomain = domain.split('.');
  if (splitDomain.length > 1) {
    return `Домен: ${domain}`;
  }
  else {
    return -1;
  }
}
function getUri(http, domain, url) {
  console.log(checkHttpValidity(http));
  console.log(checkDomainValidity(domain));
  console.log(`uri: /${url.join('/')}`);
}
function splitUrl(url) {
  const urlSplit = url.split('/');
  const index = urlSplit.indexOf('');
  if (urlSplit.indexOf('') >= 0) {
    urlSplit.splice(index, 1);
  }
  const [http, domain, ...others] = urlSplit;
  getUri(http, domain, others);
}

splitUrl('https:/purpleschool.ru/course/javascript');



function getDecimal(n) {
  n = n.toString();
  if (n.indexOf('.') >= 0) {
    _ = n.indexOf('.');
    return parseFloat(0 + n.slice(_));
  }
  else return 0;
}

console.log(getDecimal(10));

/* 
Имеется массив изменения цен prices, где внутри
1 й элемент массива является ценой в момент Х,
2 й - ценой в момент Y.
Нужно преобразовать данные в массив, где будут отображены
только положительные изменения цен: [100, 150]
  */
const prices = [[100, 200], [120, 100], [200, 350]];
const res = prices.map(([x, y]) => y - x).filter(value => value > 0);
console.log(res);

/* Вытащить имя и фамилию в отдельные переменные */
const userName = 'Вася aka Terminator Пупкин';
let [firstName, familyName] = [userName.slice(0, 4), userName.slice(-7)];
console.log(firstName);
console.log(familyName);

/* проверить является ли это номером телефона России */
/* верные */
const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910)323-53-56';
const num5 = '+7(910) 323-53-56';
/* /* неверные */
const num1Error = '89103235';
const num2Error = '+7d910d323-53-56';
const num3Error = '9 +7103235356';
const num4Error = '89103g35356';

function isTel(tel) {
  tel = tel.trim();
  let trueTel = '';
  // начинается ли с +7
  if (tel.startsWith('+7')) trueTel = '';
  else if (tel.startsWith('8')) trueTel += 8;
  else return false;

  // заканчивается ли на НЕ число
  if (isNaN(tel.slice(-1))) return false;
  //есть ли буквы, кроме скобок ( ) и - и ' '
  for (let i = 1; i < tel.length; i++) {
    if ((tel[i] !== '(' && tel[i] !== ')' && tel[i] !== '-' && tel[i] !== ' ' && tel[i] !== '+')) {
      if (!isNaN(tel[i])) {
        trueTel += tel[i];
      }
      else {
        return false;
      }
    }
  }

  // чтобы была только одна закрывающая и открывающая скобка и не больше
  let counterBracket = 0;
  for (const char of tel) {
    if (counterBracket <= 2) {
      if (char == '(') {
        counterBracket += 1;
        //ищем код региона в скобках, codeCity вернет 123)
        let codeCity = tel.slice((tel.indexOf(char) + 1), (tel.indexOf(char) + 5));
        // если код региона не заканчивается на ), то значит в скобках не 3 числа
        if (!codeCity.endsWith(')')) {
          return false;
        }
      }
      if (char == ')') counterBracket += 1;
    }
    if (counterBracket > 2) return false;
  }





  return trueTel.length === 11 ? true : false;
}

console.log(isTel('89103235356'));
console.log(isTel('+79103235356'));
console.log(isTel('+7(910)3235356'));
console.log(isTel('+7(910)323-53-56'));
console.log(isTel('+7(910) 323-53-56'));
console.log(isTel('89103235'));
console.log(isTel('+7d910d323-53-56'));
console.log(isTel('9 +7103235356'));
console.log(isTel('8910389103g3535635356'));


/* Замаскировать всё, что кроме последних 4х символов */
const card = '2342834503458353';

function maskCard(card, noMaskNumber) {
  return card.slice(-noMaskNumber).padStart(card.length, '*');
}
console.log(maskCard(card, 4));

/* Отсортировать пользователей по возрасту */
const users = [
  { name: 'Вася', age: 30 },
  { name: 'Катя', age: 18 },
  { name: 'Аня', age: 40 },
  { name: 'Петя', age: 25 },
];

console.log(users.sort((a, b) => a.age - b.age));

/* Преобразовать пользователей до вида
  {fullName: 'Вася Пупкин', skillNum: 2}
*/

const users2 = [
  {
    name: 'Вася',
    surname: 'Пупкин',
    age: 30,
    skills: ['Разработка', 'DevOps']
  },
  {
    name: 'Катя',
    surname: 'Белова',
    age: 18,
    skills: ['Дизайн']
  }
];
console.log(users2.map(obj => {
  obj.fullName = obj.name.trim() + ' ' + obj.surname.trim();
  delete obj.name;
  delete obj.surname;
  obj.skillsNum = obj.skills.length;
  delete obj.skills;
  delete obj.age;
  return obj;
}));

/*
Реализовать методы увеличения и уменьшения баланса,
при котором каждая операция сохраняется в массив
operations в виде { reason: 'Оплата налогов', sum: -100 }.
Возвращается true, если успешно и false, если не хватает баланс
Также реализовать метод вывода числа операций по кошельку
*/
const wallet = {
  balance: 0,
  operations: [],
  addBalance: function (sum, reason) {
    if (sum <= 0) {
      return false;
    }
    this.balance += sum;
    this.operations.push(
      {
        reason: reason,
        sum: sum
      }
    );
    return true;
  },
  putBalance: function (sum, reason) {
    if (sum > this.balance) {
      return false;
    }
    this.balance -= sum;
    this.operations.push(
      {
        reason: reason,
        sum: sum
      }
    );
    return true;
  },
};

console.log(wallet);
console.log(wallet.addBalance(1000, 'Часть от зп'));
console.log(wallet.putBalance(2000, 'dsf'));
console.log(wallet.putBalance(500, 'dsf'));
console.log(wallet.balance);

/*
  Сделать объект склад с методами добавления на склад, поиска по складу товара и расчёта веса
*/
const warehouse = {
  goods: [],
  findGoodById: function (goodId) {
    return this.goods.filter(obj => obj.id === goodId)[0] ?? 'Товар не найден на складе'
  },
  addGood: function (...good) {
    for (const g of good) {

      const checkArray = this.goods.some(obj => obj.id === g.id);
      if (!checkArray) {
        this.goods.push(g)
      }
      else {
        console.log('Такой товар уже есть на складе. Он не будет добавлен')
      }

    }
    console.log('Товары успешно добавлены на склад');
  },
  getWeightKg: function () {
    return this.goods.reduce((acc, currObj) => {
        return acc += currObj?.weight?.kg ?? 0;  
    }, 0)
  }
};
/* товары */
const car = {
  id: 1,
  weight: {
    kg: 1000
  },
  brand: 'Ford'
};
const chair = {
  id: 2,
  weight: {
    kg: 2
  }
};
const paper = {
  id: 3,
  color: 'red'
};
warehouse.addGood(car, chair);
console.log(warehouse.getWeightKg())
warehouse.addGood(car, paper);
console.log(warehouse.goods);

console.log(warehouse.getWeightKg())
console.log(warehouse.findGoodById(7))
console.log(warehouse.findGoodById(3))
// warehouse.addGood(car, paper);
// console.log(warehouse.goods);

/*
Напишите функцию, которая при задании URL-адреса в виде строки анализирует только доменное имя 
и возвращает его в виде строки. Например:
url = "http://github.com/carbonfive/raygun" -> domain name = "github"
*/
function domainName(url) {
  let newUrl = '';
  if (url.indexOf('http://www.') >= 0) {
    newUrl = url.replace('http://www.', '')
    return newUrl.slice(0, newUrl.indexOf('.'))
  }
  if (url.indexOf('https://www.') >= 0) {
    newUrl = url.replace('https://www.', '')
    return newUrl.slice(0, newUrl.indexOf('.'))
  }
  if (url.indexOf('http://') >= 0) {
    newUrl = url.replace('http://', '')
    return newUrl.slice(0, newUrl.indexOf('.'))
  }
}

console.log(domainName("http://www.zombie-bites.com"))

/*
HEX to rgb
*/
let r = 16777215;
let b = 0x1234FF;
console.log(r.toString(16));
console.log(b.toString(10));
function brightest(colors) {
colors = colors.map(color => {
  color = '0x' + color.slice(1);
  return Number((color).toString(10));
});
colors.sort((a, b) => b - a);
let color = colors[0].toString(16)
  if(colors.length < 6) {
    return '#' + color.padStart(6, '0').toUpperCase();
  }
  return '#' + color.toUpperCase();
  
}
console.log(brightest(["#001000","#000000"]));