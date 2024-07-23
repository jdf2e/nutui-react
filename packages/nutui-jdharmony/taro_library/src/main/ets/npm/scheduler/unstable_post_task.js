'use strict';

if ("production" === 'production') {
  module.exports = require('./cjs/scheduler-unstable_post_task.production.min.js');
} else {
  module.exports = require('./cjs/scheduler-unstable_post_task.development.js');
}
