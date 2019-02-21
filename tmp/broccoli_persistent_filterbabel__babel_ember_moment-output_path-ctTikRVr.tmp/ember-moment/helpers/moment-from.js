define('ember-moment/helpers/moment-from', ['exports', 'ember-moment/utils/helper-compute', 'ember-moment/helpers/-base'], function (exports, _helperCompute, _base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _base.default.extend({
    compute: (0, _helperCompute.default)(function ([datetime, ...params], { hideAffix, locale, timeZone }) {
      this._super(...arguments);

      const moment = Ember.get(this, 'moment');

      return this.morphMoment(moment.moment(datetime), { locale, timeZone }).from(...params, hideAffix);
    })
  });
});