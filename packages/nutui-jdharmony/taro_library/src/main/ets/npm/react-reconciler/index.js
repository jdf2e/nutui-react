'use strict';

if ("production" === 'production') {
  module.exports = require('./cjs/react-reconciler.production.min.js');
} else {
  module.exports = require('./cjs/react-reconciler.development.js');
}
