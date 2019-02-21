define('ember-moment/helpers/moment-format', ['exports', 'ember-moment/utils/helper-compute', 'ember-moment/helpers/-base'], function (exports, _helperCompute, _base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _base.default.extend({
    defaultFormatDidChange: Ember.observer('moment.defaultFormat', function () {
      this.recompute();
    }),

    compute: (0, _helperCompute.default)(function (params, { locale, timeZone }) {
      this._super(...arguments);

      const moment = Ember.get(this, 'moment');
      const { length } = params;

      if (length > 3) {
        throw new TypeError('ember-moment: Invalid number of arguments, expected at most 3');
      }

      const args = [];
      const formatArgs = [];
      const defaultFormat = Ember.get(this, 'moment.defaultFormat');

      args.push(params[0]);

      if (length === 1 && !Ember.isEmpty(defaultFormat)) {
        formatArgs.push(defaultFormat);
      } else if (length === 2) {
        formatArgs.push(params[1]);
      } else if (length > 2) {
        args.push(params[2]);
        formatArgs.push(params[1]);
      }

      return this.morphMoment(moment.moment(...args), { locale, timeZone }).format(...formatArgs);
    })
  });
});