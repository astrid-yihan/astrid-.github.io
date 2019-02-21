define('ember-moment/helpers/moment-to-now', ['exports', 'ember-moment/utils/helper-compute', 'ember-moment/helpers/-base'], function (exports, _helperCompute, _base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _base.default.extend({
    compute: (0, _helperCompute.default)(function (params, { hidePrefix, hideAffix, locale, timeZone }) {
      Ember.deprecate('hidePrefix is deprecated in favour of hideAffix', hidePrefix === undefined, // display if this is false
      { id: 'ember-moment.addon.helpers.moment-to-now', until: '8.0.0' });

      this._super(...arguments);

      const moment = Ember.get(this, 'moment');
      const hide = hidePrefix || hideAffix;
      return this.morphMoment(moment.moment(...params), { locale, timeZone }).toNow(hide);
    })
  });
});