const Matrix = require('./matrix');

try{
  window.Matrix = window.Matrix || Matrix;
}
catch (e){}

require('./computation');
require('./plus');
require('./equal');
require('./minus');

module.exports = Matrix;