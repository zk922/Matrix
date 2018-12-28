const {getType, isInt} = require('./utils');



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
    else {
      _throwArgumentsError();
    }

  }

  /**
   * 获取位置i,j位置元素
   * **/
  Matrix.prototype.get = function (i, j) {
    return this._data[i][j];
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
   * 3.第二层数组中的元素，非数字的元素会按照真假值进行进行0，1转换。
   * @param {Array} arr 输入的数组
   * @return {Array<Array<number>>}
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

      //3.遍历二级数组，进行值的转换
      let newArr = [];
      v.forEach( e => newArr.push(_convertToNumber(e)));
      result[i] = newArr;
    });
    return result;
  }

  /**
   * 将值转为数字
   * 1.数字直接返回
   * 2.非数字，真值转为1，假值转为0
   * **/
  function _convertToNumber(o){
    return getType(o) === 'number' ? o : (o ? 1 : 0);
  }

  /**================================= 类的内部方法end ==============================**/






  return Matrix;
})();



