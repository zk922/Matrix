const Matrix = require('./matrix');
const {_throwArgumentsError} = require('./utils');

/**
 * 判断两个matrix是否相等
 * @param {Matrix} a
 * @param {Matrix} b
 * @return {boolean}
 * **/
Matrix.equal = Matrix.eq = function (a, b) {
  if(!(a instanceof Matrix) || !(b instanceof Matrix)) _throwArgumentsError();
  if(a.column !== b.column || a.row !== b.row) return false;

  let getItem = Matrix.prototype.getItem;
  for(let i=0; i<a.row; i++){
    for(let j=0; j<a.column; j++){
      if(getItem.call(a,i,j) !== getItem.call(b,i,j)) return false;
    }
  }
  return true;
};

/**
 * 判断是否与某个Matrix相等
 * @param {Matrix} matrix
 * @return {boolean}
 * **/
Matrix.prototype.equal = Matrix.prototype.eq = function(matrix){
  return Matrix.equal(this, matrix);
};