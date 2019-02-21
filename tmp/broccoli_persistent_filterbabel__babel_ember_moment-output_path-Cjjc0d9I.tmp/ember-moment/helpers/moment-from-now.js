define('ember-moment/helpers/moment-from-now', ['exports', 'ember-moment/utils/helper-compute', 'ember-moment/helpers/-base'], function (exports, _helperCompute, _base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _base.default.extend({
    compute: (0, _helperCompute.default)(function (params, { hideSuffix, hideAffix, locale, timeZone }) {
      Ember.deprecate('hideSuffix is deprecated in favour of hideAffix', hideSuffix === undefined, // display if this is false
      { id: 'ember-moment.addon.helpers.moment-from-now', until: '8.0.0' });

      this._super(...arguments);

      const moment = Ember.get(this, 'moment');
      const hide = hideSuffix || hideAffix;
      return this.morphMoment(moment.moment(...params), { locale, timeZone }).fromNow(hide);
    })
  });
});