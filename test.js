let multiply = require('./src/multiply');

let A = [
  [1, 2],
  [1, -1]
];
let B = [
  [1, 2, -3],
  [-1, 1, 2]
];

let C = multiply(A, B);
console.log(C);