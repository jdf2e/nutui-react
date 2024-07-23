'use strict';

if ("production" === 'production') {
  module.exports = require('./cjs/scheduler-unstable_mock.production.min.js');
} else {
  module.exports = require('./cjs/scheduler-unstable_mock.development.js');
}
