const Matrix = require('./matrix');

try{
  window.Matrix = window.Matrix || Matrix;
}
catch (e){}

require('./computation');
require('./plus');
require('./equal');
require('./minus');
require('./multiply');

module.exports = Matrix;