define('ember-moment/helpers/moment-diff', ['exports', 'ember-moment/utils/helper-compute', 'ember-moment/helpers/-base'], function (exports, _helperCompute, _base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _base.default.extend({
    compute: (0, _helperCompute.default)(function (params, { precision, float, locale, timeZone }) {
      this._super(...arguments);

      if (!params || params && params.length !== 2) {
        throw new TypeError('ember-moment: Invalid Number of arguments, must be 2');
      }

      const moment = Ember.get(this, 'moment');
      const [dateA, dateB] = params;

      return this.morphMoment(moment.moment(dateB), { locale, timeZone }).diff(dateA, precision, float);
    })
  });
});