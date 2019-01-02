/**============================== 内部工具方法 ====================================**/
/**
 * 获取数据type
 * **/
function getType(x){
  return Object.prototype.toString.call(x).slice(8, -1).toLowerCase();
}
/**
 * 判断数字是不是整数
 * **/
function isInt(n){
  return n%1 === 0;
}


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
 * @param {string?} msg
 * **/
function _throwArgumentsError(msg) {
  throw new Error('Invalid arguments' + (msg ? ': ' + msg : ''));
}

/**
 * clone 二维数组
 * @param {Array} arr
 * @param {function?} fn1 复制数组时候，每遍历i行时候的回调
 * @param {function?} fn2 复制数组时候，每遍历i行j列时候的回调
 * @return {Array}
 * **/
function _clone(arr, fn1, fn2) {//todo 需要将二维数组遍历方式统一
  let result = [];
  arr.forEach((row, i)=>{
    fn1 && fn1(row, i, arr);
    result[i] = [];
    row.forEach((item, j)=>{
      result[i][j] = fn2 ? fn2(item, i, j, arr) : item;
    });
  });
  return result;
}


/**
 * 输入为数组时候进行校验并二层拷贝数组
 * 校验和转换规则：
 * 1.第一层数组元素必为数组
 * 2.矩阵必须为矩形，即每一列长度必须一致，也就是每一个二级数组长度必须一致
 * @param {Array} source 输入的数组
 * @return {Array<Array<?>>}
 * **/
function _arrayValidate(source){
  let column = 0;
  return _clone(source, function (row, i) {
    if(getType(row) !== 'array'){
      _throwArgumentsError('Array must be a two-dimensional array');
    }
    if( i !== 0 && column !== row.length) _throwArgumentsError('Columns must be consistent');
    column = row.length;
  });
}

module.exports = {
  getType,
  _create2dArray,
  _numValidate,
  _throwArgumentsError,
  _arrayValidate,
  _clone
};