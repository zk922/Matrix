const Mocha = require('mocha');
const cp = require('child_process');
const path = require('path');


let mocha = new Mocha({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'testReport'
  }
});
/**======================= 添加测试用例文件 ===========================**/
mocha.addFile(__dirname + '/constructor.test.js');
mocha.addFile(__dirname + '/operation.test.js');
mocha.addFile(__dirname + '/computation.test.js');


/**======================= 添加测试用例文件end ===========================**/
mocha.run(function (err) {
  cp.exec(`explorer ${path.resolve(__dirname, '../testReport/mochawesome.html')}`);
});