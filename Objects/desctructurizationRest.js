let user = {
  name: 'Вася',
  city: 'Москва',
  age: 40
};

// const {age, name} = user;
// console.log(name);
// console.log(age);

const { age, ...userWithouAge } = user;
console.log(age);
console.log(userWithouAge);


const additionalData = {
  skills: ['JS', 'PHP'],
  creditCard: '2342-2133-2342-2432'
};
// user.skills = additionalData.skills;
// user.creditCard = additionalData.creditCard;

//spread operator
user = {
  ...user,
  ...additionalData,
}
console.log(user);
