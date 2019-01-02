const {getType, _create2dArray, _numValidate, _arrayValidate, _throwArgumentsError, _clone} = require('./utils');


/**
 * main function   主构造函数
 * 可选接收参数方式:
 * 1.无参数，返回1*1 矩阵
 * 2.一个不小于1的整数参数i，返回i行1列矩阵
 * 3.一个参数并且为数字，
 * **/
function Matrix(...args){
  //1.validate arguments
  if(args.length === 0){
    this._data = _create2dArray(1, 1, 0);    //无参数返回1*1 Matrix
  }
  else if(getType(args[0]) === 'number'){
    if(!_numValidate(args[0])){
      _throwArgumentsError('Rows and Columns arguments must be positive integers');
    }
    else if(!_numValidate(args[1])){
      this._data = _create2dArray(args[0], 1, 0);
    }
    else if( _numValidate(args[1])){
      this._data = _create2dArray(args[0], args[1], 0);
    }
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

/**===================================== 类的基础public方法 ================================**/
/**
 * 获取位置i行,j列位置元素，从0开始计算
 * @param {number} i
 * @param {number} j
 * @return {number}
 * **/
Matrix.prototype.getItem = function (i, j) {
  if(!_numValidate(i+1) || !_numValidate(j+1)) _throwArgumentsError();
  if(i+1>this.row || j+1>this.column) _throwArgumentsError('i or j is out of upper limit');
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
  if(i+1>this.row || j+1>this.column) _throwArgumentsError('i or j is out of upper limit');
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
  if(!_numValidate(i+1) || i+1>this.row) _throwArgumentsError('i is out of upper limit');
  return this._data[i].slice();
};
/**
 * 获取第j列元素
 * @param {number} j
 * @return {number[]}
 * **/
Matrix.prototype.getColumn = function (j) {
  if(!_numValidate(j+1) || j+1>this.column) _throwArgumentsError('j is out of upper limit');
  let row = this.row;
  let columnArray = [];
  for(let i=0; i<row; i++){
    columnArray.push(this.getItem(i, j));
  }
  return columnArray;
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

/**
 * 返回一套数组格式的数据副本
 * @return {Array}
 * **/
Matrix.prototype.toArray = function(){
  return _clone(this._data);
};


module.exports = Matrix;