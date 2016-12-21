var _ = require('lodash')
module.exports = function(source, map) {
  return source.replace(/^exports\.default/m, 'module.exports')
};
