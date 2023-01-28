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
        // reason: reason,
        // sum: sum
        //МОЖНО СОКРАТИТЬ ================================================Enhance Object Literal
        reason,
        sum
      }
    );
    return true;
  },
};