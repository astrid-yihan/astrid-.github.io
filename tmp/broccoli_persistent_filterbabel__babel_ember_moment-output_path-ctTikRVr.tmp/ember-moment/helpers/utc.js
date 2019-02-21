define('ember-moment/helpers/utc', ['exports', 'moment', 'ember-moment/helpers/-base'], function (exports, _moment, _base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _base.default.extend({
    compute([utcTime, format]) {
      this._super(...arguments);

      return Ember.get(this, 'moment').utc(_moment.default.utc(utcTime, format));
    }
  });
});