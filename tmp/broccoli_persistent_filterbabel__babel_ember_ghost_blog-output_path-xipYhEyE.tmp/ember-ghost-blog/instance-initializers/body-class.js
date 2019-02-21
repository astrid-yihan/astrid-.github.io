define('ember-ghost-blog/instance-initializers/body-class', ['exports', 'ember-body-class/instance-initializers/body-class'], function (exports, _bodyClass) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bodyClass.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _bodyClass.initialize;
    }
  });
});