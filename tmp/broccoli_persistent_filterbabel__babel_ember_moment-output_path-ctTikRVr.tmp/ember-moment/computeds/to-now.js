define('ember-moment/computeds/to-now', ['exports', 'moment', 'ember-moment/computeds/-base'], function (exports, _moment, _base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = (0, _base.default)(function toNowComputed(params) {
    let maybeHidePrefix;

    if (params.length > 1) {
      maybeHidePrefix = params.pop();
    }

    return (0, _moment.default)(...params).toNow(maybeHidePrefix);
  });
});