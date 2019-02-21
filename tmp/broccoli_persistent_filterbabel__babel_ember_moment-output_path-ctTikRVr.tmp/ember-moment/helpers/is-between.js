define('ember-moment/helpers/is-between', ['exports', 'ember-moment/utils/helper-compute', 'ember-moment/helpers/-base'], function (exports, _helperCompute, _base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _base.default.extend({
    compute: (0, _helperCompute.default)(function (params, { precision, inclusivity, locale, timeZone }) {
      this._super(...arguments);

      const moment = Ember.get(this, 'moment');
      const _params = [].concat(params);
      const { length } = params;

      if (length < 2 || length > 3) {
        throw new TypeError('ember-moment: Invalid Number of arguments, expected 2 or 3');
      }

      const args = [];

      if (length > 2) {
        args.push(_params.shift());
      }

      return this.morphMoment(moment.moment(...args), { locale, timeZone }).isBetween(..._params, precision, inclusivity);
    })
  });
});