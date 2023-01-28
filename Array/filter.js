const operations = [100, -20, 7, -20, 50];

// const positiveOperations = [];
// for (const operation of operations) {
//   if (operation > 0) {
//     positiveOperations.push(operation);
//   }
// }
// console.log(positiveOperations);

/* ===== arr.filter() ===== */
// фильтровать массив

const positiveOperations = operations.filter(operations => {
  return operations > 0;
});
console.log(positiveOperations);