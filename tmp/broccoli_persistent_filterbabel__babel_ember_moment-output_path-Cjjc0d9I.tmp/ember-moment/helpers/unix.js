define('ember-moment/helpers/unix', ['exports', 'moment', 'ember-moment/helpers/-base'], function (exports, _moment, _base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _base.default.extend({
    compute([unixTimeStamp]) {
      this._super(...arguments);

      return Ember.get(this, 'moment').moment(_moment.default.unix(unixTimeStamp));
    }
  });
});