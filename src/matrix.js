const {getType, isInt} = require('./utils');
const Big = require('big.js');


const Matrix = (function(){
  /**
   * main function   主构造函数
   * 可选接收参数方式:
   * 1.无参数，返回1*1 矩阵
   * 2.一个不小于1的整数参数i，返回i行1列矩阵
   * 3.一个参数
   * **/
  function Matrix(...args){
    //1.validate arguments
    if(args.length === 0){
      this._data = _create2dArray(1, 1, 0);    //无参数返回1*1 Matrix
    }
    else if(args.length === 1 && _numValidate(args[0])){
      this._data = _create2dArray(args[0], 1, 0);
    }
    else if(args.length === 2 && _numValidate(args[0]) && _numValidate(args[1])){
      this._data = _create2dArray(args[0], args[1], 0);
    }
    else if(getType(args[0]) === 'array'){
      this._data = _arrayValidate(args[0]);
    }
    else if(args[0] instanceof Matrix){
      this._data = _arrayValidate(args[0]._data);
    }
    else {
      _throwArgumentsError();
    }

  }

  /**===================================== 类的public方法 ================================**/
  /**
   * 获取位置i行,j列位置元素，从0开始计算
   * @param {number} i
   * @param {number} j
   * @return {number}
   * **/
  Matrix.prototype.getItem = function (i, j) {
    if(!_numValidate(i+1) || !_numValidate(j+1)) _throwArgumentsError();
    return this._data[i][j];
  };

  /**
   * 设置位置i行,j列位置元素，从0开始计算
   * @param {number} i
   * @param {number} j
   * @param {number} value  设置的值
   * @return {number}
   * **/
  Matrix.prototype.setItem = function (i, j, value) {
    if(!_numValidate(i+1) || !_numValidate(j+1) || getType(value) !== 'number') _throwArgumentsError();
    return this._data[i][j] = value;
  };

  /** 获取行数 **/
  Object.defineProperty(Matrix.prototype, 'row', {
    get: function(){
      return this._data.length;
    }
  });
  /** 获取列数 **/
  Object.defineProperty(Matrix.prototype, 'column', {
    get: function(){
      return this._data[0].length;
    }
  });

  /**
   * 获取第i行元素
   * @param {number} i
   * @return {number[]}
   * **/
  Matrix.prototype.getRow = function (i) {
    if(!_numValidate(i+1)) _throwArgumentsError();
    return this._data[i].slice();
  };
  /**
   * 获取第j列元素
   * @param {number} j
   * @return {number[]}
   * **/
  Matrix.prototype.getColumn = function (j) {
    if(!_numValidate(j+1)) _throwArgumentsError();
    let row = this.row;
    let columnArray = [];
    for(let i=0; i<row; i++){
      columnArray.push(this.getItem(i, j));
    }
    return columnArray;
  };

  /**
   * 判断是否与某个Matrix相等
   * @param {Matrix} matrix
   * @return {boolean}
   * **/
  Matrix.prototype.equal = Matrix.prototype.eq = function(matrix){
    return Matrix.equal(this, matrix);
  };

  /**
   * Matrix相加
   * @param {Matrix} matrix
   * @return {Matrix}
   * **/
  Matrix.prototype.add = Matrix.prototype.plus = function(matrix){
    return Matrix.add(this, matrix);
  };

  /**
   * Matrix相减
   * @param {Matrix} matrix
   * @return {Matrix}
   * **/
  Matrix.prototype.minus = function(matrix){
    return Matrix.minus(this, matrix);
  };

  /**
   * 覆写toString方法
   * @return {string}
   * **/
  Matrix.prototype.toString = function(){
    let str = '[\n';
    this._data.forEach((row, i, matrix)=>{
      str += `[${row.toString()}]${i+1<matrix.length?',':''}\n`
    });
    str += ']';
    return str;
  };

  /**
   * 覆写valueOf方法
   * **/
  Matrix.prototype.valueOf = function(){
    return Array.prototype.valueOf.call(this._data);
  };

  /**===================================== 类的static方法 ================================**/
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
   * matrix相减
   * @param {Matrix} a
   * @param {Matrix} b
   * @return {Matrix}
   * **/
  Matrix.minus = function (a, b) {
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
  };


  /**
   * 定义item值的加法运算规则。如果想自定义值的加法规则，可以覆盖
   * 默认是使用Big.js进行的加法运算
   * @param {number} a
   * @param {number} b
   * @return {number}
   * **/
  Matrix._itemPlus = function (a, b) {
    return parseFloat((new Big(a)).add(b).toString());
  };

  /**
   * 定义item值的减法运算规则。如果想自定义值的减法规则，可以覆盖
   * 默认是使用Big.js进行的减法运算
   * @param {number} a
   * @param {number} b
   * @return {number}
   * **/
  Matrix._itemMinus = function (a, b) {
    return parseFloat((new Big(a)).minus(b).toString());
  };

  /**===================================== 类的内部方法 ================================**/
  /**
   * 创建i*j的二维数组，默认使用0填充
   * @param {number}i 行数
   * @param {number}j 列数
   * @param {number?} num 填充数值
   * **/
  function _create2dArray(i, j, num = 0){
    let arr = [];
    for(let n=0; n<i; n++){
      arr[n] = new Array(j).fill(num);
    }
    return arr;
  }

  /**
   * 创建矩阵时判断行列参数是否有效
   * 行列应为不小于1的正整数
   * **/
  function _numValidate(n) {
    return getType(n) === 'number' && isInt(n) && n >= 1;
  }

  /**
   * 抛出异常
   * **/
  function _throwArgumentsError() {
    throw new Error('Invalid arguments type');
  }
  /**
   * 输入为数组时候进行校验并二层拷贝数组
   * 校验和转换规则：
   * 1.第一层数组元素必为数组
   * 2.矩阵必须为矩形，即每一列长度必须一致，也就是每一个二级数组长度必须一致
   * @param {Array} arr 输入的数组
   * @return {Array<Array<?>>}
   * **/
  function _arrayValidate(arr){
    let result = [];
    let column = 0;   //用来比对第二层数组长度
    arr.forEach((v, i)=>{
      //1.校验第一层数组必须为数组
      if(getType(v) !== 'array'){
        _throwArgumentsError();
      }

      //2.校验长度一致
      if( i !== 0 && column !== v.length) _throwArgumentsError();
      column = v.length;

      //3.遍历二级数组
      let newArr = [];
      v.forEach( e => newArr.push(e));
      result[i] = newArr;
    });
    return result;
  }
  /**================================= 类的内部方法end ==============================**/
  return Matrix;
})();

try{
  window.Matrix = window.Matrix || Matrix;
}
catch (e){}

module.exports = Matrix;