define('ember-moment/computeds/moment', ['exports', 'moment', 'ember-moment/computeds/-base'], function (exports, _moment, _base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = (0, _base.default)(function momentComputed(params) {
    return (0, _moment.default)(...params);
  });
});