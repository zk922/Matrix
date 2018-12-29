const Matrix = require('./matrix');
const {_throwArgumentsError} = require('./utils');

/**
 * matrix相加
 * @param {Matrix} a
 * @param {Matrix} b
 * @return {Matrix}
 * **/
Matrix.add = Matrix.plus = function (a, b) {
  if(!(a instanceof Matrix) || !(b instanceof Matrix)) _throwArgumentsError();
  if(a.column !== b.column || a.row !== b.row) _throwArgumentsError();

  let _data = [];

  let getItem = Matrix.prototype.getItem;
  for(let i=0; i<a.row; i++){
    _data[i] = [];
    for(let j=0; j<a.column; j++){
      _data[i][j] = Matrix._itemPlus(getItem.call(a,i,j), getItem.call(b,i,j));
    }
  }

  let m = new Matrix();
  m._data = _data;
  return m;
};

/**
 * Matrix相加
 * @param {Matrix} matrix
 * @return {Matrix}
 * **/
Matrix.prototype.add = Matrix.prototype.plus = function(matrix){
  return Matrix.add(this, matrix);
};