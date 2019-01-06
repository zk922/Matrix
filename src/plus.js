const Matrix = require('./matrix');
const {_throwArgumentsError} = require('./utils');

/**
 * matrix相加
 * @param {Matrix} args
 * @return {Matrix}
 * **/
Matrix.add = Matrix.plus = function(...args){
  if(args.length < 2) _throwArgumentsError();
  if(args.length === 2) return plusTwo(...args);
  return Matrix.add(plusTwo(args[0], args[1]), ...args.slice(2));
};

/**
 * Matrix相加
 * @param {Matrix} args
 * @return {Matrix}
 * **/
Matrix.prototype.add = Matrix.prototype.plus = function(...args){
  if(args.length < 1) _throwArgumentsError('must have at least one argument');
  return Matrix.add(this, ...args);
};


/**
 * 两个Matrix相加
 * @param {Matrix} a
 * @param {Matrix} b
 * @return {Matrix}
 * **/
function plusTwo(a, b) {
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
}

module.exports = Matrix;