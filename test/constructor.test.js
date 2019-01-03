const {assert} = require('chai');
const Matrix = require('../src/main');
const {array2dEqual} = require('./utils');


describe('Constructor Test 构造函数测试', function () {
  describe('无参数', function () {
    it('返回1*1矩阵, 唯一项为0', function () {
      let m = new Matrix();
      assert.isTrue(array2dEqual(m._data, [[0]]));
    });
  });

  describe('输入数字构造Matrix', function () {
    it('第一个参数i是正整数，第二个参数j非正整数，返回i*1以0填充的矩阵', function () {
      let i = 3;
      let equal = [[0],[0],[0]];
      assert.isTrue(array2dEqual(new Matrix(i)._data, equal));
      assert.isTrue(array2dEqual(new Matrix(i, '3')._data, equal));
      assert.isTrue(array2dEqual(new Matrix(i, 1.1)._data, equal));
      assert.isTrue(array2dEqual(new Matrix(i, 0)._data, equal));
      assert.isTrue(array2dEqual(new Matrix(i, -1)._data, equal));
    });
    it('第一个参数i是正整数，第二个参数j也是正整数，返回i*j以0填充的矩阵', function () {
      let i = 3, j = 4;
      let equal = [[0,0,0,0],[0,0,0,0],[0,0,0,0]];
      assert.isTrue(array2dEqual(new Matrix(i,j)._data, equal));
    });
    it('第一个参数i不是正整数，报错', function () {
      let errMsg = 'Invalid arguments: Rows and Columns arguments must be positive integers';
      assert.throw(function () {
        new Matrix(-1);
      }, errMsg);
      assert.throw(function () {
        new Matrix(0);
      }, errMsg);
      assert.throw(function () {
        new Matrix(1.1);
      }, errMsg);
    });
  });

  describe('输入数组构造Matrix', function () {
    it('第二层不全是数组，[[1],2,3]，报错"Invalid arguments: Array must be a two-dimensional array"', function () {
      assert.throw(function () {
        new Matrix([[1],2,3]);
      }, 'Invalid arguments: Array must be a two-dimensional array');
    });
    it('第二层数组长度不一致，[[1],[2,3],[3]]，报错"Invalid arguments: Columns must be consistent"', function () {
      assert.throw(function () {
        new Matrix([[1],[2,3],[3]]);
      }, 'Invalid arguments: Columns must be consistent');
    });
    it('输入正确，返回矩阵，_data属性和输入数组对应相等', function () {
      let arr = [[1, 4.4],[2, 3],[3, 6.7]];
      assert.isTrue(array2dEqual(new Matrix(arr)._data, arr));
    });
    it('输入正确，需要返回矩阵中保存的应该是输入数组的副本，两层数组都应该是副本', function () {
      let arr = [[1, 4.4],[2, 3],[3, 6.7]];
      let m = new Matrix(arr);
      assert.notEqual(m._data, arr);
      assert.isTrue(m._data.every((row, i)=>row !== arr[i]));
    });
  });

  describe('输入Matrix构造Matrix', function () {
    let m = new Matrix([[1, 4.4],[2, 3],[3, 6.7]]);
    it('两个矩阵的_data对应相等', function () {
      let mc = new Matrix(m);
      assert.isTrue(array2dEqual(m._data, mc._data));
    });
    it('两个矩阵的_data是副本', function () {
      let mc = new Matrix(m);
      assert.notEqual(m, mc);
      assert.notEqual(mc._data, m._data);
      assert.isTrue(mc._data.every((row, i)=>row !== m._data[i]));
    });
  });
});