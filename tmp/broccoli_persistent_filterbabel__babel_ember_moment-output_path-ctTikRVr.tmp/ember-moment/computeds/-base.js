define('ember-moment/computeds/-base', ['exports', 'ember-macro-helpers/computed-unsafe'], function (exports, _computedUnsafe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = computedFactory;
  function computedFactory(fn) {
    return function (...args) {
      return (0, _computedUnsafe.default)(...args, function (...vals) {
        return fn.call(this, vals);
      });
    };
  }
});