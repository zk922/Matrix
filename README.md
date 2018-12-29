# Matrix

### Constructor
```
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
### static methods
