define('ember-moment/computeds/utc', ['exports', 'moment', 'ember-moment/computeds/-base'], function (exports, _moment, _base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = (0, _base.default)(function utcComputed(params) {
    return _moment.default.utc(...params);
  });
});