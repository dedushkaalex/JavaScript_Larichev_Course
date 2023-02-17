const score = [5, 10, 0, 15];

for (const [i, el] of score.entries()) {
  console.log(`Раунд: ${i + 1} - ${el}`);
}

// на forEach не работает break\continue
score.forEach((value, index, array) => {
  console.log(`Раунд: ${index + 1} - ${value}`);
  console.log(array);
});

// (val:5, index:0, array: score) => { ... }
// (val:10, index:1, array: score) => { ... }
// (val:0, index:2, array: score) => { ... }
// (val:15, index:3, array: score) => { ... }