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
// let m3 = new Matrix(2, 3)
// console.log(m3)
// let m4 = new Matrix([[4, 5, 6], [7, 8, 9]]);
// console.log(m4)

let m = new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]);

console.log(m.getItem(2, 0));
console.log(m.setItem(2, 0, 111));
console.log(m.getRow(3));
console.log(m.getColumn(1));
console.log(m.toString());
console.log(m.toArray());

let m1 = new Matrix([[1,2,3]]);
let m2 = new Matrix([[4,5,6]]);
let m3 = new Matrix([[7,8,9]]);
let m4 = new Matrix([[7],[8],[9]]);
let m5 = new Matrix([[4,5,6]]);
let m6 = new Matrix([[11,22,33],[2,4,6],[7,9,33]]);

/**
 * add
 * @param{Matrix} args
 * @return{Matrix}
 **/
console.log(m1.add(m2));
console.log(Matrix.add(m1, m2, m3));
console.log(Matrix.plus(m1, m2, m3));
console.log(m1.add(m2, m3));
console.log(m1.plus(m2, m3));


console.log(Matrix.minus(m1, m2));
console.log(m1.minus(m2));
//=> Matrix [ [ -3, -3, -3 ] ]
console.log(Matrix.minus(m1, m2, m3));
console.log(m1.minus(m2, m3));
//=> Matrix  [ [ 12, 15, 18 ] ]


console.log(Matrix.mul(m4, m5));
console.log(m4.mul(m5));
//=> Matrix [ [ 5, 7, 9 ] ]
console.log(Matrix.mul(m4, m5, m6));
console.log(Matrix.multiply(m4, m5, m6));
console.log(m4.mul(m5, m6));
console.log(m4.multiply(m5, m6));
//=> Matrix  [ [ 12, 15, 18 ] ]

console.log(m4.mul(2));

console.log(m4.mul(2, m5));

new Matrix(-1)