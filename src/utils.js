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

module.exports = {
  getType,
  isInt
};