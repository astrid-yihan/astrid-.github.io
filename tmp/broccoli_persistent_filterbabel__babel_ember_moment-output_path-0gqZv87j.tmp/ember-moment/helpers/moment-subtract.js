define('ember-moment/helpers/moment-subtract', ['exports', 'ember-moment/utils/helper-compute', 'ember-moment/helpers/-base'], function (exports, _helperCompute, _base) {
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
      const subtractionArgs = [];

      if (length === 1) {
        subtractionArgs.push(params[0]);
      } else if (length === 2 && Ember.typeOf(params[0]) === 'number' && Ember.typeOf(params[1]) === 'string') {
        subtractionArgs.push(...params);
      } else {
        args.push(params[0]);
        subtractionArgs.push(...params.slice(1));
      }

      return this.morphMoment(moment.moment(...args), { locale, timeZone }).subtract(...subtractionArgs, precision);
    })
  });
});