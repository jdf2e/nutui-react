'use strict';

if ("production" === 'production') {
  module.exports = require('./cjs/react.shared-subset.production.min.js');
} else {
  module.exports = require('./cjs/react.shared-subset.development.js');
}
