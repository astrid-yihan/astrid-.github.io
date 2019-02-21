define('ember-moment/helpers/now', ['exports', 'moment', 'ember-moment/helpers/-base'], function (exports, _moment, _base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _base.default.extend({
    compute() {
      this._super(...arguments);

      const momentService = Ember.get(this, 'moment');

      return momentService.moment(_moment.default.now());
    }
  });
});