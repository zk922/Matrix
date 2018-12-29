const Matrix = require('./matrix');
const {_throwArgumentsError, getType} = require('./utils');

/**
 * matrix相乘
 * @param {Matrix | number} args
 * @return {Matrix}
 * **/
Matrix.multiply = Matrix.mul = function(...args){
  if(args.length < 2) _throwArgumentsError();
  if(args.length === 2) return multiplyTwo(...args);
  return Matrix.multiply(multiplyTwo(args[0], args[1]), ...args.slice(2));
};

/**
 * matrix相乘
 * @param {Matrix | number} args
 * @return {Matrix}
 * **/
Matrix.prototype.multiply = Matrix.prototype.mul = function (...args){
  return Matrix.mul(this, ...args);
};

/**
 * 计算两个值的乘积
 * 参数判断共判断9种情况
 * a type:  Matrix | number |others
 * b type:  Matrix | number |others
 *
 * @param {Matrix | number} a
 * @param {Matrix | number} b
 * @return {Matrix | number}
 * **/
function multiplyTwo(a, b){
  //a,b种有非Matrix或者number的类型，报错
  if((!(a instanceof Matrix) && getType(a) !== 'number') || (!(b instanceof Matrix) && getType(b) !== 'number')) _throwArgumentsError();
  if(a instanceof Matrix && b instanceof Matrix) return twoMatrix(a, b);
  if(getType(a) === 'number' && getType(b) === 'number') return Matrix._itemMultiply(a, b);
  return matrixAndNumber(a, b);
}

/**
 * 计算两个matrix的乘积
 * @param {Matrix} a
 * @param {Matrix} b
 * @return {Matrix}
 * **/
function twoMatrix(a, b){
  if(!(a instanceof Matrix) || !(b instanceof Matrix)) _throwArgumentsError();
  if(a.column !== b.row ) _throwArgumentsError();

  let row = a.row;        //结果矩阵行数
  let column = b.column;   //结果矩阵列数

  let calculateTime = a.column;

  /**
   * i,j位置值为a的i行与b的j列对应值相乘再求和
   * **/
  function calculate(i, j){
    let num = 0;
    for(let n=0; n<calculateTime; n++){
      num = Matrix._itemPlus(num, Matrix._itemMultiply(a.getItem(i,n), b.getItem(n,j)));
    }
    return num;
  }
  let _data = [];
  for(let i=0; i<row; i++){
    _data[i] = [];
    for(let j=0; j<column; j++){
      _data[i][j] = calculate(i, j);
    }
  }
  let m = new Matrix();
  m._data = _data;
  return m;
}


/**
 * 计算number与matrix的乘积
 * @param {Matrix | number} a
 * @param {Matrix | number} b
 * @return {Matrix | number}
 * **/
function matrixAndNumber(a, b){
  let matrix = a instanceof Matrix ? a : b;
  let number = a instanceof Matrix ? b : a;

  let _data = [];
  let getItem = Matrix.prototype.getItem;

  let row = matrix.row;
  let column = matrix.column;

  for(let i=0; i<row; i++){
    _data[i] = new Array(column);
    matrix._data[i].forEach((item, j)=>{
      _data[i][j] = Matrix._itemMultiply(getItem.call(matrix,i,j), number);
    });
  }
  let m = new Matrix();
  m._data = _data;

  return m;
}