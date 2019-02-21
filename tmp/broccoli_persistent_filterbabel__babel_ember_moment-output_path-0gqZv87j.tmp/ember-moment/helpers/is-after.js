define('ember-moment/helpers/is-after', ['exports', 'ember-moment/helpers/-base', 'ember-moment/utils/helper-compute'], function (exports, _base, _helperCompute) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _base.default.extend({
    compute: (0, _helperCompute.default)(function (params, { precision, locale, timeZone }) {
      this._super(...arguments);

      const moment = Ember.get(this, 'moment');
      const { length } = params;
      const args = [];
      const comparisonArgs = [];

      if (length === 1) {
        comparisonArgs.push(params[0]);
      } else if (length === 2) {
        args.push(params[0]);
        comparisonArgs.push(params[1]);
      }

      return this.morphMoment(moment.moment(...args), { locale, timeZone }).isAfter(...comparisonArgs, precision);
    })
  });
});