define('ember-moment/helpers/moment', ['exports', 'ember-moment/helpers/-base'], function (exports, _base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _base.default.extend({
    compute(params, { locale, timeZone }) {
      this._super(...arguments);

      const moment = Ember.get(this, 'moment');

      return this.morphMoment(moment.moment(...params), { locale, timeZone });
    }
  });
});