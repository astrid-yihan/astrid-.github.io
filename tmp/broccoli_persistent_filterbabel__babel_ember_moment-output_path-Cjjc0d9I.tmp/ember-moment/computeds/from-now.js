define('ember-moment/computeds/from-now', ['exports', 'moment', 'ember-moment/computeds/-base'], function (exports, _moment, _base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = (0, _base.default)(function fromNowComputed(params) {
    let maybeHideSuffix;

    if (params.length > 1) {
      maybeHideSuffix = params.pop();
    }

    return (0, _moment.default)(...params).fromNow(maybeHideSuffix);
  });
});