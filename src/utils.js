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
 * **/
function _throwArgumentsError() {
  throw new Error('Invalid arguments');
}

/**
 * clone 二维数组
 * @param {Array} arr
 * @param {function?} fn 复制数组时候，每个ij位置的回调
 * @return {Array}
 * **/
function _clone(arr, fn) {//todo 需要将二维数组遍历方式统一
  let result = [];
  arr.forEach((row, i)=>{
    result[i] = [];
    row.forEach((item, j)=>{
      result[i][j] = item;
    });
  });
  return result;
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

module.exports = {
  getType,
  _create2dArray,
  _numValidate,
  _throwArgumentsError,
  _arrayValidate,
  _clone
};