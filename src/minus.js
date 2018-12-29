const Matrix = require('./matrix');
const {_throwArgumentsError} = require('./utils');


/**
 * matrix相减
 * @param {Matrix} args
 * @return {Matrix}
 * **/
Matrix.minus = function(...args){
  if(args.length < 2) _throwArgumentsError();
  if(args.length === 2) return minusTwo(args[0], args[1]);
  return Matrix.minus(minusTwo(args[0], args[1]), ...args.slice(2));
};

/**
 * Matrix相减
 * @param {Matrix} args
 * @return {Matrix}
 * **/
Matrix.prototype.minus = function(...args){
  return Matrix.minus(this, ...args);
};


/**
 * 两个matrix相减
 * @param {Matrix} a
 * @param {Matrix} b
 * @return {Matrix}
 * **/
function minusTwo(a, b) {
  if(!(a instanceof Matrix) || !(b instanceof Matrix)) _throwArgumentsError();
  if(a.column !== b.column || a.row !== b.row) _throwArgumentsError();

  let _data = [];

  let getItem = Matrix.prototype.getItem;
  for(let i=0; i<a.row; i++){
    _data[i] = [];
    for(let j=0; j<a.column; j++){
      _data[i][j] = Matrix._itemMinus(getItem.call(a,i,j), getItem.call(b,i,j));
    }
  }

  let m = new Matrix();
  m._data = _data;
  return m;
}