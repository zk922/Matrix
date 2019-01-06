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
let arr5 = [
  [1.1, 2.3, 4.4]
];
let arr6 = [
  [1.1, 2.3],
  [4  , 4.6]
];
describe('相等判断方法测试 equal test', function () {
  describe('public相等测试 m.equal() & m.eq()', function () {
    it('m.equal与m.eq相同', function () {
      let m = new Matrix(arr1);
      assert.equal(m.eq, m.equal);
    });
    it('m.equal与m.eq均为函数', function () {
      let m = new Matrix(arr1);
      assert.isFunction(m.eq);
    });
    it('必须有一个参数', function () {
      let m = new Matrix(arr1);
      assert.throw(function () {
        m.eq();
      }, 'Invalid arguments: must have one argument');
    });
    it('参数不为Matrix，报错', function () {
      let m = new Matrix(arr1);
      assert.throw(function () {
        m.eq('111');
      }, 'Invalid arguments: arguments type must be Matrix');
    });
    it('原矩阵不变', function () {
      let m1 = new Matrix(arr1);
      let m2 = new Matrix(arr1);
      const m1Cache = m1;
      const _dataCache = m1._data;
      assert.isTrue(m1.eq(m2));
      assert.equal(m1, m1Cache);
      assert.equal(m1._data, _dataCache);
    });
    it('返回布尔值', function () {
      let m1 = new Matrix(arr1);
      let m2 = new Matrix(arr1);
      let m3 = new Matrix(arr2);
      let r1 = m1.eq(m2);
      let r2 = m1.eq(m3);
      assert.isBoolean(r1);
      assert.isBoolean(r2);
    });
    it('结果正确', function () {
      let m1 = new Matrix(arr1);
      let m2 = new Matrix(arr1);
      let m3 = new Matrix(arr2);
      let r1 = m1.eq(m2);
      let r2 = m1.eq(m3);
      assert.isTrue(r1);
      assert.isFalse(r2);
    });
  });

  describe('static相等测试 Matrix.equal() & Matrix.eq()', function () {
    it('Matrix.equal与Matrix.eq相同', function () {
      assert.equal(Matrix.eq, Matrix.equal);
    });
    it('Matrix.equal与Matrix.eq均为函数', function () {
      assert.isFunction(Matrix.eq);
    });
    it('必须有两个参数', function () {
      let m = new Matrix(arr1);
      assert.throw(function () {
        Matrix.eq(m);
      }, 'Invalid arguments: must have two arguments');
    });
    it('参数有不为Matrix的，报错', function () {
      let m = new Matrix(arr1);
      assert.throw(function () {
        Matrix.eq(m, '123');
      }, 'Invalid arguments: arguments type must be Matrix');
    });
    it('原矩阵不变', function () {
      let m1 = new Matrix(arr1);
      let m2 = new Matrix(arr1);
      const m1Cache = m1;
      const m1_dataCache = m1._data;
      const m2Cache = m2;
      const m2_dataCache = m2._data;
      assert.isTrue(Matrix.eq(m1, m2));
      assert.equal(m1, m1Cache);
      assert.equal(m1._data, m1_dataCache);
      assert.equal(m2, m2Cache);
      assert.equal(m2._data, m2_dataCache);
    });
    it('返回布尔值', function () {
      let m1 = new Matrix(arr1);
      let m2 = new Matrix(arr1);
      let m3 = new Matrix(arr2);
      let r1 = Matrix.eq(m1, m2);
      let r2 = Matrix.eq(m1, m3);
      assert.isBoolean(r1);
      assert.isBoolean(r2);
    });
    it('结果正确', function () {
      let m1 = new Matrix(arr1);
      let m2 = new Matrix(arr1);
      let m3 = new Matrix(arr2);
      let r1 = Matrix.eq(m1, m2);
      let r2 = Matrix.eq(m1, m3);
      assert.isTrue(r1);
      assert.isFalse(r2);
    });
  });

});


describe('加法功能测试 plus test', function (){
  describe('public加法测试 m.plus() & m.add()', function () {
    it('m.plus与m.add相同', function (){
      let m1 = new Matrix(arr1);
      assert.equal(m1.plus, m1.add);
    });
    it('m.plus与m.add均为函数', function (){
      let m1 = new Matrix(arr1);
      assert.isFunction(m1.plus);
    });
    it('参数小于1，报错', function (){
      let m1 = new Matrix(arr1);
      assert.throw(function (){
        m1.add();
      }, 'Invalid arguments: must have at least one argument');
    });
    it('参数有不为Matrix的，报错', function (){
      let m1 = new Matrix(arr1);
      let m2 = new Matrix(arr2);
      assert.throw(function () {
        m1.add(m2, arr2);
      }, 'Invalid arguments: arguments type must be Matrix');
    });
    it('行或者列不相等，报错', function () {
      let m1 = new Matrix(arr1);
      let m2 = new Matrix(arr5);
      let m3 = new Matrix(arr6);
      assert.throw(function () {
        m1.add(m2);
      }, 'Invalid arguments: rows and columns must be equivalent');
      assert.throw(function () {
        m1.add(m3);
      }, 'Invalid arguments: rows and columns must be equivalent');
    });
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