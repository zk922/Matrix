/**
 * 默认的每一项的加减乘运算规则
 * 因为矩阵不限制i，j位置的类型，不一定为数字
 * 默认全为数字，使用big.js处理浮点运算。
 * 如果矩阵中的项不为数字或者需要特殊运算规则，可以在Matrix类上覆盖
 * Matrix._itemPlus
 * Matrix._itemMinus
 * Matrix._itemMultiply
 * 这三个方法
 * **/

const Matrix = require('./matrix');
const Big = require('big.js');



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

/**
 * 定义item值的乘法运算规则。如果想自定义值的乘法规则，可以覆盖
 * 默认是使用Big.js进行的减法运算
 * @param {number} a
 * @param {number} b
 * @return {number}
 * **/
Matrix._itemMultiply = function (a, b) {
  return parseFloat((new Big(a)).mul(b).toString());
};