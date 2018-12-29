const Matrix = require('./matrix');
const {_throwArgumentsError} = require('./utils');

Matrix.prototype.multiply = function (...args){
  if(args.length === 0){
    throw new Error('至少有一个参数');
  }
  if(args.length === 1){
    return args[0];
  }
  return this.multiply(multiplyTwo(args[0], args[1]), ...args.slice(2));
};
/**
 * 计算两个值的乘积
 * **/
function multiplyTwo(a, b){
  let line = a.length;        //结果矩阵行数
  let column = b[0].length;   //结果矩阵列数
  /**
   * i,j位置值为a的i行与b的j列对应值相乘再求和，
   * 所以，计算次数应该为a的列数与b的行数的较小值。
   * **/
  let calculateTime = Math.min(a[0].length, b.length);
  function calculate(i, j){
    let num = 0;
    for(let n=0; n<calculateTime; n++){
      num += a[i][n] * b[n][j];
    }
    return num;
  }
  let result = [];
  for(let i=0; i<line; i++){
    result[i] = [];
    for(let j=0; j<column; j++){
      result[i][j] = calculate(i, j);
    }
  }
  return result;
}

