const {assert} = require('chai');
const Matrix = require('../src/main');
const {arrayEqual} = require('./utils');

const arr = [
  [2.1, 3.2, 4.5, 3.6, 5.4],
  [2  , 3  , 4  , 3  , 5  ],
  [12 , 2  , 41 , 32 , 53 ]
];

describe('basic operations test 基本操作测试', function () {
  describe('取值getItem(i,j)', function () {
    it('i, j不是非负整数，报错', function () {
      let m = new Matrix(arr);
      assert.throw(function () {
        m.getItem(-1, 0);
      }, 'Invalid arguments');
      assert.throw(function () {
        m.getItem(1.1, 2);
      }, 'Invalid arguments');
      assert.throw(function () {
        m.getItem(1.1, -1);
      }, 'Invalid arguments');
    });
    it('i, j超上限，报错', function () {
      let m = new Matrix(arr);
      assert.throw(function () {
        m.getItem(2, 5);
      }, 'Invalid arguments: i or j is out of upper limit');
      assert.throw(function () {
        m.getItem(3, 3);
      }, 'Invalid arguments: i or j is out of upper limit');
    });
    it('输入正确', function () {
      let m = new Matrix(arr);
      assert.equal(m.getItem(0, 0), 2.1);
      assert.equal(m.getItem(2, 4), 53);
      assert.equal(m.getItem(1, 1), 3);
    });
  });
  describe('设置值setItem(i,j,v)', function () {
    it('i, j不是非负整数，报错', function () {
      let m = new Matrix(arr);
      assert.throw(function () {
        m.getItem(-1, 0);
      }, 'Invalid arguments');
      assert.throw(function () {
        m.getItem(1.1, 2);
      }, 'Invalid arguments');
      assert.throw(function () {
        m.getItem(1.1, -1);
      }, 'Invalid arguments');
    });
    it('i, j超上限，报错', function () {
      let m = new Matrix(arr);
      assert.throw(function () {
        m.getItem(2, 5);
      }, 'Invalid arguments: i or j is out of upper limit');
      assert.throw(function () {
        m.getItem(3, 3);
      }, 'Invalid arguments: i or j is out of upper limit');
    });
    it('输入正确', function () {
      let m = new Matrix(arr);
      m.setItem(0, 0, 1);
      assert.equal(m._data[0][0], 1);
      m.setItem(2, 4, 33);
      assert.equal(m._data[2][4], 33);
      m.setItem(1, 1, 99);
      assert.equal(m._data[1][1], 99);
    });
  });
  describe('获取行/列数', function () {
    it('row === 3', function () {
      let m = new Matrix(arr);
      assert.equal(m.row, 3);
    });
    it('column === 5', function () {
      let m = new Matrix(arr);
      assert.equal(m.column, 5);
    });
  });

  describe('获取指定行getRow(i)', function () {
    it('i不是非负整数，报错', function () {
      let m = new Matrix(arr);
      assert.throw(function () {
        m.getRow(-1);
      }, 'Invalid arguments');
      assert.throw(function () {
        m.getRow(1.1);
      }, 'Invalid arguments');
    });
    it('i超上限，报错', function () {
      let m = new Matrix(arr);
      assert.throw(function () {
        m.getRow(4);
      }, 'Invalid arguments: i is out of upper limit');
    });
    it('返回数组', function () {
      let m = new Matrix(arr);
      assert.isArray(m.getRow(1));
    });
    it('每次返回的是的副本', function () {
      let m = new Matrix(arr);
      assert.notEqual(m.getRow(1), m._data[1]);
      assert.notEqual(m.getRow(1), m.getRow(1));
    });
    it('返回结果正确', function () {
      let m = new Matrix(arr);
      assert.isTrue(arrayEqual(m.getRow(1), [2  , 3  , 4  , 3  , 5  ]));
    });
  });

  describe('获取指定列getColumn(j)', function () {
    it('j不是非负整数，报错', function () {
      let m = new Matrix(arr);
      assert.throw(function () {
        m.getColumn(-1);
      }, 'Invalid arguments');
      assert.throw(function () {
        m.getColumn(1.1);
      }, 'Invalid arguments');
    });
    it('j超上限，报错', function () {
      let m = new Matrix(arr);
      assert.throw(function () {
        m.getColumn(5);
      }, 'Invalid arguments: j is out of upper limit');
    });
    it('返回数组', function () {
      let m = new Matrix(arr);
      assert.isArray(m.getColumn(1));
    });
    it('返回数组', function () {
      let m = new Matrix(arr);
      assert.isArray(m.getColumn(1));
    });
    it('每次返回的是的副本', function () {
      let m = new Matrix(arr);
      assert.notEqual(m.getColumn(1), m.getColumn(1));
    });
    it('返回结果正确', function () {
      let m = new Matrix(arr);
      assert.isTrue(arrayEqual(m.getColumn(1), [3.2, 3, 2]));
    });
  });
});