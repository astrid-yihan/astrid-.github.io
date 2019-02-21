define('ember-moment/helpers/moment-duration', ['exports', 'moment', 'ember-moment/helpers/-base'], function (exports, _moment, _base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _base.default.extend({
    compute(params, { locale, timeZone }) {
      this._super(...arguments);
      const momentService = Ember.get(this, 'moment');

      if (!params || params && params.length > 2) {
        throw new TypeError('ember-moment: Invalid Number of arguments, at most 2');
      }

      const result = momentService.moment(_moment.default.duration(...params));

      return this.morphMoment(result._i, { locale, timeZone }).humanize();
    }
  });
});