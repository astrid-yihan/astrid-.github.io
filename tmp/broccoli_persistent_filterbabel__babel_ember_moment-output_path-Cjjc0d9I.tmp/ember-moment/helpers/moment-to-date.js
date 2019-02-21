define('ember-moment/helpers/moment-to-date', ['exports', 'ember-moment/utils/helper-compute', 'ember-moment/helpers/-base'], function (exports, _helperCompute, _base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _base.default.extend({
    compute: (0, _helperCompute.default)(function (params, { hidePrefix, locale, timeZone }) {
      this._super(...arguments);

      const moment = Ember.get(this, 'moment');

      return this.morphMoment(moment.moment(), { locale, timeZone }).to(...params, hidePrefix);
    })
  });
});