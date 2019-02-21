define('ember-moment/helpers/moment-calendar', ['exports', 'ember-moment/utils/helper-compute', 'ember-moment/helpers/-base'], function (exports, _helperCompute, _base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _base.default.extend({
    compute: (0, _helperCompute.default)(function (params, formatHash = {}) {
      this._super(...arguments);

      if (!params || params && params.length > 3) {
        throw new TypeError('ember-moment: Invalid Number of arguments, at most 3');
      }

      const moment = Ember.get(this, 'moment');
      const { locale, timeZone } = formatHash;
      const [date, referenceTime, formats] = params;
      const clone = Object.create(formatHash);

      delete clone.locale;
      delete clone.timeZone;

      const mergedFormats = Ember.merge(clone, formats);

      return this.morphMoment(moment.moment(date), { locale, timeZone }).calendar(referenceTime, mergedFormats);
    })
  });
});