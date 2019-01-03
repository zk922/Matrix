const {assert} = require('chai');
const Matrix = require('../src/main');

let arr1 = [
  [1.1, 2.3, 4.4],
  [4  , 4.6, 17 ]
];
let arr2 = [
  [2.2, 2.5, 8.9],
  [4  , 4.6, 17 ]
];
let arr3 = [
  [2.2, 2.5],
  [4  , 4.6],
  [7  , 11 ]
];
let arr4 = [
  [3.3, 4.8, 13.3],
  [8  , 9.2, 34  ]
];


describe('相等判断方法测试 equal test', function () {
  describe('public相等测试 m.equal() & m.eq()', function () {
    it('m.equal与m.eq相同', function () {
      let m = new Matrix(arr1);
      assert.equal(m.eq, m.equal);
    });
    it('m.equal与m.eq均为函数', function () {
      let m = new Matrix(arr1);
      assert.isFunction(m);
    });
    it('参数不为Matrix，报错', function () {
      let m = new Matrix(arr1);
      assert.throw()//todo 加减运算单元测试待完成
    });
    it('原矩阵不变');
    it('返回布尔值');
    it('结果正确');
  });

  describe('static相等测试 Matrix.equal() & Matrix.eq()', function () {
    it('Matrix.equal与Matrix.eq相同');
    it('Matrix.equal与Matrix.eq均为函数');

    it('参数有不为Matrix的，报错');
    it('原矩阵不变');
    it('返回布尔值');
    it('结果正确');
  });

});


describe('加法功能测试 plus test', function () {
  describe('public加法测试 m.plus() & m.add()', function () {
    it('m.plus与m.add相同');
    it('m.plus与m.add均为函数');
    it('参数有不为Matrix的，报错');
    it('行不相等，报错');
    it('列不相等，报错');
    it('避免js浮点运算精度问题');
    it('原矩阵不变');
    it('返回新的矩阵');
    it('结果正确');
    it('连续加法结果正确');
  });

  describe('static加法测试 Matrix.plus() & Matrix.add()', function () {
    it('Matrix.plus与Matrix.add相同');
    it('Matrix.plus与Matrix.add均为函数');
    it('参数有不为Matrix的，报错');
    it('行不相等，报错');
    it('列不相等，报错');
    it('避免js浮点运算精度问题');
    it('原矩阵不变');
    it('返回新的矩阵');
    it('结果正确');
    it('连续加法结果正确');
  });

});

describe('减法功能测试 minus test', function () {
  describe('public减法测试 m.minus()', function () {
    it('参数有不为Matrix的，报错');
    it('行不相等，报错');
    it('列不相等，报错');
    it('避免js浮点运算精度问题');
    it('原矩阵不变');
    it('返回新的矩阵');
    it('结果正确');
    it('连续减法结果正确');
  });

  describe('static减法测试 Matrix.minus()', function () {
    it('参数有不为Matrix的，报错');
    it('行不相等，报错');
    it('列不相等，报错');
    it('避免js浮点运算精度问题');
    it('原矩阵不变');
    it('返回新的矩阵');
    it('结果正确');
    it('连续减法结果正确');
  });
});