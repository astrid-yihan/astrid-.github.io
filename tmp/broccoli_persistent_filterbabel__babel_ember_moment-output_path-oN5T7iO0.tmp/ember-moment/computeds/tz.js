define('ember-moment/computeds/tz', ['exports', 'moment', 'ember-moment/computeds/-base'], function (exports, _moment, _base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = (0, _base.default)(function tzComputed([date, tz]) {
    return (0, _moment.default)(date).tz(tz);
  });
});