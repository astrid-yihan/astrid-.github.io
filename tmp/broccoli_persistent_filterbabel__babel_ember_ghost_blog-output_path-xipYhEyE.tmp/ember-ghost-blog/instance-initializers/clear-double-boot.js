define('ember-ghost-blog/instance-initializers/clear-double-boot', ['exports', 'ember-cli-fastboot/instance-initializers/clear-double-boot'], function (exports, _clearDoubleBoot) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _clearDoubleBoot.default;
    }
  });
});