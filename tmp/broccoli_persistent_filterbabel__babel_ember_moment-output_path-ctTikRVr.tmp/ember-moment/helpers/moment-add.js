define('ember-moment/helpers/moment-add', ['exports', 'ember-moment/utils/helper-compute', 'ember-moment/helpers/-base'], function (exports, _helperCompute, _base) {
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
      const additionArgs = [];

      if (length === 1) {
        additionArgs.push(params[0]);
      } else if (length === 2 && Ember.typeOf(params[0]) === 'number' && Ember.typeOf(params[1]) === 'string') {
        additionArgs.push(...params);
      } else {
        args.push(params[0]);
        additionArgs.push(...params.slice(1));
      }

      return this.morphMoment(moment.moment(...args), { locale, timeZone }).add(...additionArgs, precision);
    })
  });
});