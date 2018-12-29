const Matrix = require('./src/main');

let A = [
  [1, 2],
  [1, -1]
];
let B = [
  [1, 2, -3],
  [-1, 1, 2]
];

// console.log(C);

let add = Matrix.add(new Matrix([[1,2,3]]), new Matrix([[3,4,5]]));
console.log(add);

let minus = Matrix.minus(new Matrix([[1,2.1,3]]), new Matrix([[3,1.2,5]]));
console.log(minus);
console.log(new Matrix([[123,4],[3,4],[22,3]]).toString());
console.log(new Matrix([[123,4],[3,4],[22,3]]).valueOf());

let eq = Matrix.eq(new Matrix([[1,2.1,31]]), new Matrix([[1,2.1,3]]));
console.log(eq);
let m3 = new Matrix(2, 3)
console.log(m3)
let m4 = new Matrix([[4, 5, 6], [7, 8, 9]]);
console.log(m4)

let m = new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]);

console.log(m.getItem(2, 0));
console.log(m.setItem(2, 0, 111));
console.log(m.getRow(3));
console.log(m.getColumn(1));
console.log(m.toString());
console.log(m.toArray());