'use strict';

if ("production" === 'production') {
  module.exports = require('./cjs/react-reconciler-constants.production.min.js');
} else {
  module.exports = require('./cjs/react-reconciler-constants.development.js');
}
