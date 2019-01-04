# Matrix

### Constructor
``` javascript
let m1 = new Matrix(); 
//=> Matrix  [ [0] ]

let m2 = new Matrix(2); 
//=> row === 2   Matrix  [ [0], [0] ]

let m3 = new Matrix(2, 3); 
//=> row === 2 && column === 3    Matrix  [ [ 0, 0, 0 ], [ 0, 0, 0 ] ]

let m4 = new Matrix([[4, 5, 6], [7, 8, 9]]); 
//=> Matrix  [ [ 4, 5, 6 ], [ 7, 8, 9 ] ] 

let m5 = new Matrix(m4);
//=> a copy of m4  Matrix  [ [ 4, 5, 6 ], [ 7, 8, 9 ] ] 
```

### Public properties and methods
```
let m = new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]);

m.row
//=> readonly 4

m.column
//=> readonly 3

m.getItem(2, 0)
//=>  7

m.setItem(2, 0, 111);
//=> 111   Matrix [[1, 2, 3], [4, 5, 6], [111, 8, 9], [10, 11, 12]]

m.getRow(3)
//=> Array [10, 11, 12]

m.getColumn(1)
//=> Array [2, 5, 8, 11]

m.toString()
//=> string
// [
// [1,2,3],
// [4,5,6],
// [111,8,9],
// [10,11,12]
// ]

m.toArray()
//=> a copy of data     Array [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 111, 8, 9 ], [ 10, 11, 12 ] ]
```
### Calculate
```
let m1 = new Matrix([[1,2,3]]);
let m2 = new Matrix([[4,5,6]]);
let m3 = new Matrix([[7,8,9]]);
let m4 = new Matrix([[7],[8],[9]]);
let m5 = new Matrix([[4,5,6]]);
let m6 = new Matrix([[11,22,33],[2,4,6],[7,9,33]]);


/**
* add
**/
Matrix.add(m1, m2);
m1.add(m2);
//=> Matrix [ [ 5, 7, 9 ] ]
Matrix.add(m1, m2, m3);
Matrix.plus(m1, m2, m3);
m1.add(m2, m3);
m1.plus(m2, m3);
//=> Matrix  [ [ 12, 15, 18 ] ]


/**
* minus
**/
Matrix.minus(m1, m2);
m1.minus(m2);
//=> Matrix [ [ -3, -3, -3 ] ]
Matrix.minus(m1, m2, m3);
m1.minus(m2, m3);
//=> Matrix  [ [ -10, -11, -12 ] ]


/**
* multiply
**/
Matrix.mul(m4, m5);
m4.mul(m5);
//=> Matrix [ [ 28, 35, 42 ], [ 32, 40, 48 ], [ 36, 45, 54 ] ]
Matrix.mul(m4, m5, m6);
Matrix.multiply(m4, m5, m6);
m4.mul(m5, m6);
m4.multiply(m5, m6);
//=> Matrix  [ [ 672, 1134, 2520 ], [ 768, 1296, 2880 ], [ 864, 1458, 3240 ] ]
m4.mul(2);
//=> Matrix  [ [ 14 ], [ 16 ], [ 18 ] ]
m4.mul(2, m5);
//=> Matrix  [ [ 56, 70, 84 ], [ 64, 80, 96 ], [ 72, 90, 108 ] ]

```
