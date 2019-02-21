define('ember-moment/computeds/duration', ['exports', 'moment', 'ember-moment/computeds/-base'], function (exports, _moment, _base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = (0, _base.default)(function durationComputed(params) {
    return _moment.default.duration(...params);
  });
});