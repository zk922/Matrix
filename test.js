let multiply = require('./src/multiply');
const Matrix = require('./src/matrix');

let A = [
  [1, 2],
  [1, -1]
];
let B = [
  [1, 2, -3],
  [-1, 1, 2]
];

let C = multiply(A, B);
// console.log(C);

let add = Matrix.add(new Matrix([[1,2,3]]), new Matrix([[3,4,5]]));
console.log(add);

let minus = Matrix.minus(new Matrix([[1,2.1,3]]), new Matrix([[3,1.2,5]]));
console.log(minus);