

const user = {
  firstname: 'John',
  lastname:'Doe',
  getFullName: function() {console.log(`${this.firstname} ${this.lastname}`)}
};

{
const func = user.getFullName;
func(); // undefined потеря контекста
}
/*===== BIND ===== */
//жестко привязывает контекст к функции
//этот контекст дальше поменять нельзя
{
  const func = user.getFullName.bind(user);
  func();
}
{
  const func = user.getFullName.bind({ firstname: 'Tom'});
  func(); 
}

/*===== CALL ===== */
//принимает объект, который будет контекстом для функции
{
  const func = user.getFullName;
  // func.call(user);
  func.call({firstname:'Tom'});
}

/*===== APPLY ===== */
//принимает объект, который будет контекстом для функции
{
  const user = {
    name: 'Tom',
    sayHi: function(age, message) {
      console.log(`${message}. I'm ${this.name}. I'm ${age}`)
    }
  };
  const func = user.sayHi;
  func.apply({name: 'Tom'}, [17, 'Kurva']);
}
